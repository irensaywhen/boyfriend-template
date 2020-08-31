export default class ChainedForms {
  constructor(options) {
    // Bind context
    this._cacheElements = this._cacheElements.bind(this);
    this._setUpEventListeners = this._setUpEventListeners.bind(this);

    // Save options
    this.selectors = options.selectors;

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
      let target = event.target;
      let step = target.dataset.step;

      ++step;

      if (step === this.$forms.length) return;

      $(target)
        .closest(selectors.wrapper)
        .fadeOut(400, () => {
          $(this.$forms.get(step)).closest(selectors.wrapper).fadeIn(400);
        });
    });

    if (selectors.backward) {
      // Show previous form when the "back" button is clicked"
      this.$backwardButton.click(event => {
        this.changeForm('backward');
      });
    }

    if (selectors.forward) {
      // Show next form
      this.$forwardButton.click(event => {
        this.changeForm('forward');
      });
    }
  }

  changeForm(direction) {
    event.stopPropagation();
    let selectors = this.selectors;

    let $form = $(event.target)
      .closest(selectors.wrapper)
      .find(selectors.forms);

    let step =
      direction === 'forward'
        ? Number($form.data('step')) + 1
        : Number($form.data('step')) - 1;

    $form.closest(selectors.wrapper).fadeOut(400, () => {
      // Show the form wrapper of the previous form
      $(this.$forms.get(step)).closest(selectors.wrapper).fadeIn(400);
    });

    $(document).trigger('chainedForms:switchForm');
  }
}
