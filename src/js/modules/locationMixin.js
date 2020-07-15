export default {
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
    this.cacheLocationElements();
    this.setUpLocationEventListeners();
  },

  cacheLocationElements() {
    // Cache input element
    this.$locationInput = this.$form.find(this.selectors.locationInput);

    // location dropdown wrapper
    this.$locationDropdownWrapper = this.$form.find(
      this.selectors["location-dropdown"]
    );

    // Dropdown toggle
    this.$locationDropdownToggle = this.$locationDropdownWrapper.find(
      this.selectors["dropdown-toggle"]
    );

    // Dropdown menu
    this.$locationDropdownMenu = this.$locationDropdownWrapper.find(
      this.selectors["dropdown-menu"]
    );
  },

  setUpLocationEventListeners() {
    // Listen to typing event
    this.$locationInput.on("input change", (event) => {
      // Clean previously cached values
      let customAttributes = event.target.dataset;
      for (let key in customAttributes) {
        customAttributes[key] = "";
      }

      // If the user selects the city
      if (this.citySelection) return;

      if (!this.locationInputStarted) {
        // If input hasn't started yet
        this.locationInputStarted = true;

        // Save the value
        this.locationInputValue = this.$locationInput.val();

        // Schedule next check
        this.locationTimer = setTimeout(this.throttleInput, 1500);
      }
    });

    // Handle city selection from dropdown
    this.$locationDropdownMenu.click((event) => {
      let target = event.target;

      if (target.tagName !== "LI") return;

      let dataset = target.dataset;

      this.citySelection = true;
      clearTimeout(this.locationTimer);

      // Save attributes from selected city
      this.$locationInput
        .attr("data-lat", dataset.lat)
        .attr("data-lon", dataset.lon)
        .attr("data-name", dataset.name)
        .val(dataset.name);

      console.log(this.$locationInput[0]);
      this.$locationInput.valid();

      this.citySelection = false;
      this.locationInputStarted = false;
      this.newValue = null;

      this.$locationDropdownMenu.empty();
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
      // If the inputed value has been changed during the last 2000ms
      // Save new value
      this.locationInputValue = newValue;

      // Adjust searchParams
      requestInfo.endpoint.searchParams.set("city", this.locationInputValue);

      // Make request
      let cities = await this.getCities({
        headers: requestInfo.headers,
        endpoint: requestInfo.endpoint,
        method: requestInfo.method,
      });

      // Schedule next check
      this.locationTimer = setTimeout(this.throttleInput, 2500);

      this.displayCities(cities);
    } else {
      this.locationInputStarted = false;
    }
  },

  displayCities(cities) {
    if (cities.length === 0) return;

    cities.forEach((city) => {
      this.$locationDropdownMenu
        .append(
          $("<li></li>")
            .addClass("dropdown-item")
            .attr("data-lat", city.lat)
            .attr("data-lon", city.lon)
            .attr("data-name", city["display_name"])
            .text(city["display_name"])
        )
        .append($("<li></li>").addClass("dropdown-divider"));
    });

    this.$locationDropdownToggle.dropdown("toggle");
  },

  frontendCityValidator(value, element) {
    console.log(element.dataset);
    let dataset = element.dataset;
    console.log("Lattitude: ", dataset.lat);
    console.log("Longtitude: ", dataset.lon);
    console.log("Name: ", dataset.name);
    if (dataset["lat"] && dataset["lon"] && dataset["name"]) {
      return true;
    } else {
      return false;
    }
  },
};
