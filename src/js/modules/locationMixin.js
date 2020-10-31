import debounce from './debounce.js';

export default (function () {
  // Private functions and variables
  // Timer id for debouncing
  let timerId,
    $locationInput,
    $loadingIndicator,
    $locationDropdownWrapper,
    $locationDropdownToggle,
    $locationDropdownMenu,
    dropdownShown = false;

  /**
   * Helper function to cache required elements
   */
  function _cacheElements() {
    // Caching selectors
    let selectors = this.selectors;

    // Cache input element
    $locationInput = this.$form.find(selectors.locationInput);
    // Find and hide loading indicator
    $loadingIndicator = this.$form
      .find(selectors.locationLoadingIndicator)
      .fadeOut(0);
    // location dropdown wrapper
    $locationDropdownWrapper = this.$form.find(selectors['location-dropdown']);
    // Dropdown toggle
    $locationDropdownToggle = $locationDropdownWrapper.find(
      selectors['dropdown-toggle']
    );
    // Dropdown menu
    $locationDropdownMenu = $locationDropdownWrapper.find(
      selectors['dropdown-menu']
    );
  }

  /**
   * Helper function to setup event listeners
   */
  function _setUpEventListeners() {
    // Cache
    let requestInfo = this.requests.location;

    // Handle location input
    $locationInput.on('input focus', event => {
      let target = event.target;

      if (event.type === 'focus' && target.dataset.lat) {
        return;
      }
      // Prepare input for futher actions
      _prepareCityInput(target);
      // Set delay based on event type
      let delay = event.type === 'focus' ? 0 : 300;
      // Debounce user input
      _debounce(_getNewCities, delay, requestInfo);
    });

    // Handle city selection from dropdown
    $locationDropdownMenu.click(event => {
      let target = event.target;

      if (target.tagName !== 'LI') return;
      // Change how data attributes are handled here
      let { lat, lon, name } = target.dataset;

      // Save attributes from selected city
      $locationInput
        .attr('data-lat', lat)
        .attr('data-lon', lon)
        .attr('data-name', name)
        .val(name);

      // Clean dropdown
      $locationDropdownMenu.empty();

      if ($locationInput.valid()) {
        // This event initially dedicated to profiles retrieval
        $locationInput.trigger('citySelected');
      }
    });

    $locationDropdownWrapper.on('shown.bs.dropdown', () => {
      dropdownShown = true;
    });

    $locationDropdownWrapper.on('hidden.bs.dropdown', () => {
      dropdownShown = false;
    });
  }

  /**
   * Function to prepare user input before showing newly retrieved cities
   * @param {DOMElement} input
   */
  function _prepareCityInput(input) {
    let customAttributes = input.dataset;
    for (let key in customAttributes) {
      customAttributes[key] = '';
    }

    if (dropdownShown) {
      // Hide dropdown menu on input
      $locationDropdownToggle.dropdown('toggle');
    }
    // Clean dropdown menu
    $locationDropdownMenu.empty();
  }

  /**
   * Function to make async API call to retrieve cities
   */
  function _makeAPICallForCities({ headers, endpoint, method }) {
    return this.makeRequest({
      headers,
      endpoint,
      method,
    });
  }

  /**
   * Function to display cities in dropdown
   * @param {Array} cities - cities from the API to display in dropdown
   */
  function _displayCities(cities) {
    if (cities.length === 0) return;

    cities.forEach(city => {
      $locationDropdownMenu
        .append(
          $('<li></li>')
            .addClass('dropdown-item')
            .attr('data-lat', city.lat)
            .attr('data-lon', city.lon)
            .attr('data-name', city['display_name'])
            .text(city['display_name'])
        )
        .append($('<li></li>').addClass('dropdown-divider'));
    });

    $locationDropdownToggle.dropdown('toggle');
  }

  /**
   * Function to perform operations with city retrieval
   * Including showing and hiding loading indicator
   * and calling function to display cities
   * @param {Object} requestInfo - endpoint, headers and method fot the request to retrieve citis
   */
  function _getNewCities(requestInfo) {
    let city = $locationInput.val();

    if (!city) return;
    // Show loading indicator
    $loadingIndicator.fadeIn(150);
    // Set the current input value to the search parameters
    requestInfo.endpoint.searchParams.set('city', city);

    _makeAPICallForCities(requestInfo).then(cities => {
      // Hide loading indicator
      $loadingIndicator.fadeOut(150);
      // Show retrieved cities
      _displayCities(cities);
    });
  }

  /**
   * Function to decrease the amount of requests to the API while user input
   * @param {Function} func - function to debounce
   * @param {Number} delay - delay after which to call the function
   * @param {Object} requestInfo - optional parameter - request information to make an API call
   */
  function _debounce(func, delay, requestInfo) {
    // Cancels the setTimeout method execution
    clearTimeout(timerId);

    // Executes the func after delay time.
    timerId = setTimeout(func, delay, requestInfo);
  }

  return {
    // Public functions and variables

    // Function for the custom frontend validation of the city input
    frontendCityValidator(value, element) {
      // Cache data-* sttributes
      let dataset = element.dataset;

      if (dataset['lat'] && dataset['lon'] && dataset['name']) {
        // If dataset properties are not empty, the element is valid
        return true;
      } else {
        return false;
      }
    },

    /**
     * Function to initialize location input
     * It binds the context of private functions
     * Saves request information
     * Caches elements and sets event listeners
     */
    initializeLocationInput() {
      // Caching
      let requestInfo = this.requests.location;

      // Bind context
      this.frontendCityValidator = this.frontendCityValidator.bind(this);
      _cacheElements = _cacheElements.bind(this);
      _setUpEventListeners = _setUpEventListeners.bind(this);
      _makeAPICallForCities = _makeAPICallForCities.bind(this);
      _getNewCities = _getNewCities.bind(this);
      _displayCities = _displayCities.bind(this);
      _prepareCityInput = _prepareCityInput.bind(this);

      // Add default query params to retrieve city information
      for (let key in requestInfo.searchParams) {
        requestInfo.endpoint.searchParams.set(
          key,
          requestInfo.searchParams[key]
        );
      }

      // Location input preparation
      _cacheElements();
      _setUpEventListeners();
    },
  };
})();
