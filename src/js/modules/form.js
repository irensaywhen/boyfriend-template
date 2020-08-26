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
    this.collectFormInputs = this.collectFormInputs.bind(this);
    this.showGeneralError = this.showGeneralError.bind(this);
    this.deleteGeneralError = this.deleteGeneralError.bind(this)

    if (options.location) {
      // Add location methods to the form object
      Object.assign(Form.prototype, location);
      this.location = true;
    }

    this.cacheElements();
    this.setUpEventListeners();

    if (options.frontendValidation) {
      // If this form requires frontend validation
      this.frontendValidation = true;

      // Change where error messages occur
      // This is required for label to work properly when errors are shown
      options.validatorOptions["errorPlacement"] = (error, element) => {
        element.closest(this.selectors["input-wrapper"]).append(error);
      };

      if (this.location) {
        // Add custom frontend validation for location field
        jQuery.validator.addMethod(
          "location",
          this.frontendCityValidator,
          "No such city"
        );
      }

      // Add frontend validation
      this.$form.validate(options.validatorOptions);
    }

    this.redirectOnSubmit = options.redirectOnSubmit ? true : false;
    this.generateSubmitEvent = options.generateSubmitEvent ? true : false;

    // Clean fields after submission?
    this.cleanFields = options.cleanFields ? true : false;

    // Show popup after submission with successful result?
    this.showSuccessPopup = options.showSuccessPopup ? true : false;

    // Show popup after submission with failed result?
    this.showFailPopup = options.showFailPopup ? true : false;
  }

  cacheElements() {
    // Form
    this.$form = $(this.selectors.form);

    // General error container
    this.$generalError = this.$form.find(this.selectors.generalError);

    // Input fields
    this.$inputs = this.$form.find(this.selectors.inputs);

    if (this.location) {
      this.initializeLocationInput();
    }
  }

  setUpEventListeners() {
    // Form submission
    this.$form.submit((event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!this.frontendValidation) {
        // If this form doesn't require frontend validation (as with checkboxes)
        this.collectFormInputs();
        this.sendFormInformation();

        return;
      }

      if (this.$form.valid()) {
        // If the form has frontend validation
        this.collectFormInputs();
        this.deleteGeneralError()
        this.sendFormInformation();
      }
    });

    // Hiding error message on focus
    this.$inputs.focus((event) => {
      $(event.target)
        .closest(this.selectors["input-wrapper"])
        .find(".custom-error")
        .remove();
    });

    $(document).on('chainedForms:switchForm', ()=>{
      this.deleteGeneralError()
    })
  }

  collectLocationData(element) {
    this.formData["city"] = {};

    for (let property in element.dataset) {
      this.formData["city"][property] = element.dataset[property];
    }
  }

  collectFormInputs() {
    // Collect form inputs
    this.$inputs.each((index, element) => {
      let name = element.name;
      let $element = $(element);

      if ($element.is(":checkbox")) {
        this.formData[name] = $element.is(":checked");
      } else if (name === "city") {
        this.collectLocationData(element);
      } else {
        this.formData[name] = $element.val();
      }
    });
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
        title: error.name,
        text: error.message,
        icon: "error",
      });
    } finally {
      // Remove error messages
      this.$form.find(".error").remove();
    }
    if (response.success) {
      if (this.generateSubmitEvent) {
        // Make custom event for form submission
        let customSubmittedEvent = new CustomEvent("submitted");

        // Dispatch custom event
        this.$form[0].dispatchEvent(customSubmittedEvent);
      }

      if (this.showSuccessPopup) {
        // Successful Popup
        this.showRequestResult({
          title: response.title,
          text: response.message,
          icon: "success",
        });
      }

      if (this.cleanFields) {
        // Clean input fields
        this.$inputs.val("");
      }

      if (this.redirectOnSubmit) {
        // Redirection with simulating HTTP request
        window.location.replace(response.redirect);
      }
    } else {
      if (this.showFailPopup) {
        // Unsuccessful Popup
        this.showRequestResult({
          title: response.title,
          text: response.message,
          icon: "error",
        });
      }

      let errors = response.errors;

      // Show errors of the form fields
      this.showErrorMessages({ errors});

      if(errors.general){
        this.showGeneralError(errors.general)
      }
    }
  }

  showErrorMessages({ errors }) {
    this.$inputs.each((index, element) => {
      let name = element.name;

      if (name in errors) {
        $(element)
          .closest(this.selectors["input-wrapper"])
          .append(
            $("<span></span>")
              .addClass("error")
              .addClass("custom-error")
              .text(errors[name])
          );
      }
    });
  }

  showGeneralError(errorText){
    this.$generalError.append($('<p></p>').addClass('pb-4').text(errorText))
  }

  deleteGeneralError(){
    this.$generalError.empty()
  }
}
