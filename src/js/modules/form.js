import ServerRequest from './requests.js';
import location from './locationMixin.js';
import payment from './paymentMixin.js';
import restrictLength from './restrictLengthMixin.js';
import dateValidator from './dateMixin.js';

export default class Form extends ServerRequest {
  constructor(options) {
    super(options);

    // Data that will be sent to the server
    this.formData = {};

    // Bind context
    this._cacheElements = this._cacheElements.bind(this);
    this._setUpEventListeners = this._setUpEventListeners.bind(this);
    this.collectLocationData = this.collectLocationData.bind(this);
    this.sendFormInformation = this.sendFormInformation.bind(this);
    this.showErrorMessages = this.showErrorMessages.bind(this);
    this.collectFormInputs = this.collectFormInputs.bind(this);
    this.showGeneralError = this.showGeneralError.bind(this);
    this.deleteGeneralError = this.deleteGeneralError.bind(this);

    this.payment = options.payment ? true : false;
    this.savedCardsExist = options.savedCardsExist ? true : false;

    // cache
    let selectors = this.selectors,
      errorMessages = options.errorMessages;

    // Save error messages if provided
    this.errorMessages = options.errorMessages;

    this._cacheElements();
    this._setUpEventListeners();

    if (selectors.loading) {
      // Initializing loading indicator when the form is submitted
      this.initializeLoadingIndicators(this.$form);
    }

    if (options.location) {
      // Add location methods to the form prototype
      Object.assign(Form.prototype, location);
      this.location = true;
      this.initializeLocationInput();
    }

    if (options.date) {
      // Add date validation method to the form prototype
      Object.assign(Form.prototype, dateValidator);
      this.date = true;
      this.initializeDateInput();
    }

    // Handle payment form
    if (options.payment) {
      Object.assign(Form.prototype, payment);

      jQuery.validator.addMethod(
        'expiration',
        this.creditCardExpirationValidation,
        'Expiration date is passed'
      );

      jQuery.validator.addMethod(
        'cardNumber',
        this.creditCardNumberValidation,
        'Card number is invalid'
      );
    }

    // Handle frontend validation
    if (options.frontendValidation) {
      // If this form requires frontend validation
      this.frontendValidation = true;

      // Change where error messages occur
      // This is required for label to work properly when errors are shown
      options.validatorOptions['errorPlacement'] = (error, element) => {
        element.closest(selectors['input-wrapper']).append(error);
      };

      if (this.location) {
        if (errorMessages && errorMessages.city) {
          var errorMessage = errorMessages.city;
        } else {
          var errorMessage = 'No such city';
        }
        // Add custom frontend validation for location field
        jQuery.validator.addMethod(
          'location',
          this.frontendCityValidator,
          errorMessage
        );
      }

      if (this.date) {
        jQuery.validator.addMethod('year', this.yearValidator, '');
        jQuery.validator.addMethod(
          'day',
          this.dayValidator,
          'Please enter valid day of month'
        );
      }

      // Add frontend validation
      this.validator = this.$form.validate(options.validatorOptions);
    }

    /**
     * Form configuration for submit part
     */
    // Set redirect on submit option
    this.redirectOnSubmit = options.redirectOnSubmit ? true : false;
    // Set generate submit event option
    this.generateSubmitEvent = options.generateSubmitEvent ? true : false;
    // Set cleaning fields after submission option
    this.cleanFields = options.cleanFields ? true : false;
    // Show popup after submission with successful result?
    this.showSuccessPopup = options.showSuccessPopup ? true : false;
    // Show popup after submission with failed result?
    this.showFailPopup = options.showFailPopup ? true : false;

    // Restrict input length
    if (options.restrictInputLength) {
      restrictLength.init.call(this, this.$form);
    }

    if (options.saveInitialInputValues) {
      this.$inputs.each((index, input) => {
        input.setAttribute('data-initial-value', input.value);
      });

      this.initialValuesSaved = true;
    }
  }

  _cacheElements() {
    // Form
    this.$form = $(this.selectors.form);

    // General error container
    this.$generalError = $(this.selectors.generalError);

    // Input fields
    this.$inputs = this.$form.find(this.selectors.inputs);
  }

  formResetHandler = form => {
    if (this.$form[0] !== form) return;

    this.validator.resetForm();
    this.hideErrors();
    this.$form.find(':focus').blur();
  };

  _setUpEventListeners() {
    if (this.payment && this.savedCardsExist) {
      $(document).on('paymentMethodSelection:formHidden', (_, form) =>
        this.formResetHandler(form)
      );
    }
    // Form submission
    this.$form.submit(event => {
      event.preventDefault();
      event.stopPropagation();

      if (!this.frontendValidation) {
        // If this form doesn't require frontend validation (as with checkboxes)
        this.collectFormInputs();
        this.deleteGeneralError();
        this.sendFormInformation();

        return;
      }

      if (this.$form.valid()) {
        // If the form has frontend validation
        this.collectFormInputs();
        this.deleteGeneralError();
        this.sendFormInformation();
      }
    });

    // Hiding error message on focus
    this.$inputs.focus(event => {
      $(event.target)
        .closest(this.selectors['input-wrapper'])
        .find('.custom-error')
        .remove();
    });

    $(document)
      .on('chainedForms:switchForm', () => {
        this.deleteGeneralError();
      })
      .ready(() => {
        this.$inputs.each((index, elem) => {
          let $elem = $(elem);
          if ($elem.is('select') || $elem.hasClass('preserve')) return;

          elem.value = '';
        });
      });
  }

  collectLocationData(element) {
    this.formData['city'] = {};

    for (let property in element.dataset) {
      this.formData['city'][property] = element.dataset[property];
    }
  }

  collectFormInputs() {
    // Collect form inputs
    this.$inputs.each((index, element) => {
      let name = element.name;
      let $element = $(element);

      if ($element.is(':checkbox')) {
        this.formData[name] = $element.is(':checked');
      } else if ($element.is(':radio')) {
        this.formData[name] = $('input[name=' + name + ']:checked').val();
      } else if (name === 'city') {
        this.collectLocationData(element);
      } else {
        let value = $element.val();
        let numericValue = Number(value);

        // Perform type conversion if the value is a number
        this.formData[name] = isNaN(numericValue) ? value : numericValue;
      }
    });
  }

  async sendFormInformation() {
    var { headers, method, endpoint } = this.requests.submit;

    let userId = localStorage.getItem('userId');
    if (this.payment && userId) {
      endpoint.searchParams.set('userId', userId);
    }

    let response;

    try {
      // Make request here
      response = await this.makeRequest({
        headers,
        endpoint,
        method,
        body: JSON.stringify(this.formData),
      });
    } catch (error) {
      // Unsuccessful Popup
      this.showRequestResult({
        title: error.name,
        text: error.message,
        icon: 'error',
      });
    } finally {
      // Remove error messages
      this.$form.find('.error').remove();
    }
    if (response.success) {
      // Generate submit event on the form
      if (this.generateSubmitEvent) {
        // Make custom event for form submission
        let customSubmittedEvent = new CustomEvent('submitted');

        // Dispatch custom event
        this.$form[0].dispatchEvent(customSubmittedEvent);
      }

      $(document).trigger('form:submitted', { response, $form: this.$form });

      if (this.showSuccessPopup) {
        // Successful Popup
        this.showRequestResult({
          title: response.title,
          text: response.message,
          icon: 'success',
        });
      }

      if (this.cleanFields) {
        // Clean input fields
        this.$inputs.val('');
      }

      if (this.redirectOnSubmit) {
        // Redirection with simulating HTTP request
        setTimeout(() => {
          window.location.replace(response.redirect);
        }, 1000);
      }
    } else {
      if (this.showFailPopup) {
        // Unsuccessful Popup
        this.showRequestResult({
          title: response.title,
          text: response.message,
          icon: 'error',
        });
      }

      let errors = response.errors;

      // Show errors of the form fields
      this.showErrorMessages({ errors });

      if (errors.general) {
        this.showGeneralError(errors.general);
      }
    }

    this.formData = {};
  }

  showErrorMessages({ errors }) {
    this.$inputs.each((index, element) => {
      let name = element.name;

      if (name in errors) {
        $(element)
          .closest(this.selectors['input-wrapper'])
          .append(
            $('<span></span>')
              .addClass('error')
              .addClass('custom-error')
              .text(errors[name])
          );
      }
    });
  }

  hideErrors = () => {
    this.$form.find('input.error').each((_, elem) => {
      $(elem).removeClass('error');
    });
  };

  showGeneralError(errorText) {
    this.$generalError.append($('<p></p>').addClass('pb-4').text(errorText));
  }

  deleteGeneralError() {
    this.$generalError.empty();
  }
}
