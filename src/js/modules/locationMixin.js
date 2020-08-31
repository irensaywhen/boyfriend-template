let prevLocationMixin = {
  locationInputStarted: false,
  locationInputValue: null,

  initializeLocationInput() {
    let requestInfo = this.requests.location;

    // Bind context
    this.throttleInput = this.throttleInput.bind(this);
    this.displayCities = this.displayCities.bind(this);
    this.frontendCityValidator = this.frontendCityValidator.bind(this);

    // Add default query params
    for (let key in requestInfo.searchParams) {
      requestInfo.endpoint.searchParams.set(key, requestInfo.searchParams[key]);
    }

    /* Elements caching and event listeners initialization */
    this._cacheLocationElements();
    this._setUpLocationEventListeners();
  },

  _cacheLocationElements() {
    // Cache input element
    this.$locationInput = this.$form.find(this.selectors.locationInput);

    // Loading indicator
    this.$loadingIndicator = this.$form
      .find(this.selectors.locationLoadingIndicator)
      .fadeOut(0);

    // location dropdown wrapper
    this.$locationDropdownWrapper = this.$form.find(
      this.selectors['location-dropdown']
    );

    // Dropdown toggle
    this.$locationDropdownToggle = this.$locationDropdownWrapper.find(
      this.selectors['dropdown-toggle']
    );

    // Dropdown menu
    this.$locationDropdownMenu = this.$locationDropdownWrapper.find(
      this.selectors['dropdown-menu']
    );
  },

  _setUpLocationEventListeners() {
    // Listen to typing event
    this.$locationInput.on('input change', event => {
      // Clean previously cached values
      let customAttributes = event.target.dataset;
      for (let key in customAttributes) {
        customAttributes[key] = '';
      }

      // If the user selects the city from dropdown
      if (this.citySelection) return;
      console.log(this.locationInputStarted);
      if (!this.locationInputStarted) {
        // If input hasn't started yet, indicate that the input has started
        this.locationInputStarted = true;
        // Save the value
        this.locationInputValue = this.$locationInput.val();
        // Schedule next check
        this.locationTimer = setTimeout(this.throttleInput, 1500);
      }
    });

    this.$locationInput.on('input', event => {});

    // Handle city selection from dropdown
    this.$locationDropdownMenu.click(event => {
      let target = event.target;

      if (target.tagName !== 'LI') return;

      let dataset = target.dataset;
      // Indicate that we're on city selection stage
      this.citySelection = true;
      clearTimeout(this.locationTimer);

      // Save attributes from selected city
      this.$locationInput
        .attr('data-lat', dataset.lat)
        .attr('data-lon', dataset.lon)
        .attr('data-name', dataset.name)
        .val(dataset.name);

      this.citySelection = false;
      this.locationInputStarted = false;
      this.newValue = null;

      this.$locationDropdownMenu.empty();

      if (this.$locationInput.valid()) {
        this.$locationInput.trigger('citySelected');
      }
    });
  },

  async getCities({ headers, endpoint, method }) {
    return await this.makeRequest({
      headers,
      endpoint,
      method,
    });
  },

  async throttleInput() {
    // Cache request information
    let requestInfo = this.requests.location;

    let newValue = this.$locationInput.val();

    if (!(newValue === this.locationInputValue)) {
      // If the inputed value has been changed recently
      // Save new value
      this.locationInputValue = newValue;

      // Adjust searchParams
      requestInfo.endpoint.searchParams.set('city', this.locationInputValue);
      // Show loading indicator
      this.$loadingIndicator.fadeIn(150);

      // Get cities
      let cities = await this.getCities({
        headers: requestInfo.headers,
        endpoint: requestInfo.endpoint,
        method: requestInfo.method,
      });

      console.log(cities);

      // Schedule next check
      this.locationTimer = setTimeout(this.throttleInput, 1500);

      this.$loadingIndicator.fadeOut(150);

      this.displayCities(cities);
    } else {
      // If the location hasn't changed recently
      this.locationInputStarted = false;
    }
  },

  displayCities(cities) {
    if (cities.length === 0) return;

    cities.forEach(city => {
      this.$locationDropdownMenu
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

    this.$locationDropdownToggle.dropdown('toggle');
  },

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
};

// This is the new location mixing
export default (function () {
  // Private functions and variables
  // Timer id for debouncing
  let timerId,
    $locationInput,
    $loadingIndicator,
    $locationDropdownWrapper,
    $locationDropdownToggle,
    $locationDropdownMenu;

  /**
   * Helper function to cache required elements
   */
  // Maybe, after implementing functionality, you can make these variables private
  // TO not to mess everything together
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
    $locationInput.on('input', event => {
      // Clean previously cached values about city
      // Check whether they are cached properly
      let customAttributes = event.target.dataset;
      for (let key in customAttributes) {
        customAttributes[key] = '';
      }

      // Show loading indicator here
      // And hide it when the cities are being retrieved and showed

      // Debounce user input
      _debounce(_getNewCities, 1000, requestInfo);
    });

    // Handle city selection from dropdown
    $locationDropdownMenu.click(event => {
      let target = event.target;

      if (target.tagName !== 'LI') return;

      let dataset = target.dataset;

      // Save attributes from selected city
      $locationInput
        .attr('data-lat', dataset.lat)
        .attr('data-lon', dataset.lon)
        .attr('data-name', dataset.name)
        .val(dataset.name);

      // Clean dropdown
      $locationDropdownMenu.empty();

      if ($locationInput.valid()) {
        // Trigger event to let everything know that the city was selected
        $locationInput.trigger('citySelected');
      }
    });
  }

  // Function to make async API call to the Nominatium
  function _makeAPICallForCities({ headers, endpoint, method }) {
    return this.makeRequest({
      headers,
      endpoint,
      method,
    });
  }

  // Function to display cities in dropdown
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

  function _getNewCities(requestInfo) {
    // Set the current input value to the search parameters
    requestInfo.endpoint.searchParams.set('city', $locationInput.val());

    _makeAPICallForCities(requestInfo).then(cities => {
      _displayCities(cities);
    });
  }

  // Function to debonce making an API call
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

    initializeLocationInput() {
      console.log('Initializing location inout');
      console.log(this);
      // Caching
      let requestInfo = this.requests.location;

      // Bind context
      this.frontendCityValidator = this.frontendCityValidator.bind(this);
      _cacheElements = _cacheElements.bind(this);
      _setUpEventListeners = _setUpEventListeners.bind(this);
      _makeAPICallForCities = _makeAPICallForCities.bind(this);
      _getNewCities = _getNewCities.bind(this);
      _displayCities = _displayCities.bind(this);

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
