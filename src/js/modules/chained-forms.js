import stepsMixin from './stepsMixin.js';

export default class ChainedForms {
  constructor(options) {
    // Bind context
    this._cacheElements = this._cacheElements.bind(this);
    this._setUpEventListeners = this._setUpEventListeners.bind(this);
    this._changeForm = this._changeForm.bind(this);
    this._showStep = this._showStep.bind(this);

    // Save current step
    this.step = 0;

    // Save options
    this.selectors = options.selectors;

    if (options.showSteps) {
      Object.assign(ChainedForms.prototype, stepsMixin);
      this.initStepsMixin(options.stepsConfig);
    }

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    let selectors = this.selectors;

    // Forms container
    this.$container = $(selectors.formsContainer);

    this.$generalErrors = this.$container.find(selectors.generalError);

    // Forms to chain
    this.$forms = this.$container
      .find(selectors.forms)
      .each((index, element) => {
        if (index !== 0) {
          $(element).closest(selectors.wrapper).fadeOut().hide();
        }
      });

    // Forward button
    this.$forwardButton = selectors.forward
      ? this.$container.find(selectors.forward)
      : null;

    // Backward button
    this.$backwardButton = selectors.backward
      ? this.$container.find(selectors.backward)
      : null;
  }

  _setUpEventListeners() {
    let selectors = this.selectors;
    // Show next form when the current is submitted
    this.$forms.on('submitted', event => {
      event.stopPropagation();

      let target = event.target;

      this._changeForm('forward', target);
    });

    $(document).on('premium:changeUser', () => {
      this._showStep(0);
    });

    if (selectors.backward) {
      // Show previous form when the "back" button is clicked"
      this.$backwardButton.click(event => {
        event.stopPropagation();

        let target = event.target;

        this._changeForm('backward', target);
      });
    }

    if (selectors.forward) {
      // Show next form
      this.$forwardButton.click(event => {
        event.stopPropagation();

        let target = event.target;

        this._changeForm('forward', target);
      });
    }
  }

  _changeForm(direction, target) {
    let selectors = this.selectors;

    let $form = $(target).closest(selectors.wrapper).find(selectors.forms);

    let step =
      direction === 'forward'
        ? Number($form.data('step')) + 1
        : Number($form.data('step')) - 1;

    // Show the calculated step
    this._showStep(step);

    $(document).trigger('chainedForms:switchForm', direction);
  }

  _showStep(step) {
    if (step > this.$forms.length - 1) return;

    let selectors = this.selectors;

    // Hide the current step and show the desired step
    $(this.$forms.get(this.step))
      .closest(selectors.wrapper)
      .fadeOut(400, () => {
        $(this.$forms.get(step)).closest(selectors.wrapper).fadeIn(400);
      });

    // Save the currently visible step
    this.step = step;
  }
}
