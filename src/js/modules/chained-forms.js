import stepsMixin from './stepsMixin.js';

export default class ChainedForms {
  constructor(options) {
    // Bind context
    this._cacheElements = this._cacheElements.bind(this);
    this._setUpEventListeners = this._setUpEventListeners.bind(this);

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
    // Forms container
    this.$container = $(this.selectors.formsContainer);

    this.$generalErrors = this.$container.find(this.selectors.generalError);

    // Forms to chain
    this.$forms = this.$container
      .find(this.selectors.forms)
      .each((index, element) => {
        if (index !== 0) {
          $(element).closest(this.selectors.wrapper).fadeOut().hide();
        }
      });

    // Forward button
    this.$forwardButton = this.selectors.forward
      ? this.$container.find(this.selectors.forward)
      : null;

    // Backward button
    this.$backwardButton = this.selectors.backward
      ? this.$container.find(this.selectors.backward)
      : null;
  }

  _setUpEventListeners() {
    let selectors = this.selectors;
    // Show next form when the current is submitted
    this.$forms.on('submitted', event => {
      this._changeForm('forward');
    });

    if (selectors.backward) {
      // Show previous form when the "back" button is clicked"
      this.$backwardButton.click(event => {
        this._changeForm('backward');
      });
    }

    if (selectors.forward) {
      // Show next form
      this.$forwardButton.click(event => {
        this._changeForm('forward');
      });
    }
  }

  _changeForm(direction) {
    event.stopPropagation();
    let selectors = this.selectors;

    let $form = $(event.target)
      .closest(selectors.wrapper)
      .find(selectors.forms);

    let step =
      direction === 'forward'
        ? Number($form.data('step')) + 1
        : Number($form.data('step')) - 1;

    if (step > this.$forms.length) return;

    // Save the current step;
    this.step = step;

    $form.closest(selectors.wrapper).fadeOut(400, () => {
      // Show the form wrapper of the previous form
      $(this.$forms.get(step)).closest(selectors.wrapper).fadeIn(400);
    });

    $(document).trigger('chainedForms:switchForm', direction);
  }
}
