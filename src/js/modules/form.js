import ServerRequest from "./requests.js";
import location from "./locationMixin.js";

export default class Form extends ServerRequest {
  constructor(options) {
    super(options);

    // Data that will be sent to the server
    this.formData = {};

    // Bind context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);
    this.collectLocationData = this.collectLocationData.bind(this);
    this.sendFormInformation = this.sendFormInformation.bind(this);
    this.showErrorMessages = this.showErrorMessages.bind(this);
    this.removeErrorMessages = this.removeErrorMessages.bind(this);

    if (options.location) {
      // Add methods to the form object
      Object.assign(Form.prototype, location);
      this.location = true;
    }

    this.cacheElements();
    this.setUpEventListeners();

    // Add frontend validation
    this.$form.validate(options.validatorOptions);
  }

  cacheElements() {
    // Form
    this.$form = $(this.selectors.form);

    // Input fields
    this.$inputs = this.$form.find(this.selectors.inputs);

    if (this.location) {
      this.initializeLocationInput();
    }
  }

  setUpEventListeners() {
    this.$form.submit((event) => {
      event.preventDefault();
      event.stopPropagation();

      if (this.$form.valid()) {
        // Collect form inputs
        this.$inputs.each((index, element) => {
          let name = element.name;

          if (name === "city") {
            this.collectLocationData(element);
          } else {
            this.formData[name] = $(element).val();
          }
        });
        // Send them to the server
        this.sendFormInformation();
      }
    });
  }

  collectLocationData(element) {
    this.formData["city"] = {};

    for (let property in element.dataset) {
      this.formData["city"][property] = element.dataset[property];
    }
  }

  async sendFormInformation() {
    let response;

    try {
      // Make request here
      response = await this.makeRequest({
        headers: this.requests.submit.headers,
        endpoint: this.requests.submit.endpoint,
        method: this.requests.submit.method,
        body: JSON.stringify(this.formData),
      });
    } catch (error) {
      // Unsuccessful Popup
      this.showRequestResult({
        title: "Oops!",
        text: error.message,
        icon: "error",
      });
    } finally {
      // Remove error messages
    }

    if (response.success) {
      // Successful Popup
      this.showRequestResult({
        title: "Success!",
        text: response.message,
        icon: "success",
      });
    } else {
      this.showErrorMessages({ errors: response.errors });
    }
  }

  showErrorMessages({ errors }) {
    this.$inputs.each((index, element) => {
      let name = element.name;

      if (name in errors) {
        $(element)
          .closest(this.selectors["input-wrapper"])
          .append($("<span></span>").addClass("error").text(errors[name]));
        //$("<span></span>").addClass("error").text(errors[name]);
      }
    });
  }

  removeErrorMessages() {}
}
