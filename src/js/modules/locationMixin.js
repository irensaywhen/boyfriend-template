export default {
  initializeLocationInput() {
    let requestInfo = this.requests.location;
    // Cache input element
    this.$locationInput = this.$form.find(this.selectors.locationInput);

    // Add default query params
    for (let key in requestInfo.searchParams) {
      requestInfo.endpoint.searchParams.set(key, requestInfo.searchParams[key]);
    }

    // Add event listener
    this.$locationInput.on("input", (event) => {
      // Specify the inputed city
      requestInfo.endpoint.searchParams.set("city", this.$locationInput.val());

      // Make request to the server
      this.getCities({
        headers: requestInfo.headers,
        endpoint: requestInfo.endpoint,
        method: requestInfo.method,
      });
    });
  },

  async getCities({ headers, endpoint, method }) {
    let result = await this.makeRequest({
      headers,
      endpoint,
      method,
    });
    console.log(result);
  },
};
