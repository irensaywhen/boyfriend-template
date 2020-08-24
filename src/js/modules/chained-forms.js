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
    // Show next form when the current is submitted
    this.$forms.on('submitted', event => {
      let target = event.target;
      let step = target.dataset.step;

      ++step;

      if (step === this.$forms.length) return;

      $(target)
        .closest(this.selectors.wrapper)
        .fadeOut(400, () => {
          $(this.$forms.get(step)).closest(this.selectors.wrapper).fadeIn(400);
        });
    });

    if (this.selectors.backward) {
      // Show previous form when the "back" button is clicked"
      this.$backwardButton.click(event => {
        // Here something is not working
        event.stopPropagation();

        let $form = $(event.target)
          .closest(this.selectors.wrapper)
          .find(this.selectors.forms);

        let previousStep = Number($form.data('step')) - 1;

        // Hide the form wrapper
        $form.closest(this.selectors.wrapper).fadeOut(400, () => {
          // Show the form wrapper of the previous form
          $(this.$forms.get(previousStep))
            .closest(this.selectors.wrapper)
            .fadeIn(400);
        });
      });
    }

    if (this.selectors.forward) {
      this.$forwardButton.click(event => {
        event.stopPropagation();

        let $form = $(event.target)
          .closest(this.selectors.wrapper)
          .find(this.selectors.forms);

        let nextStep = Number($form.data('step')) + 1;

        // Hide the form wrapper
        $form.closest(this.selectors.wrapper).fadeOut(400, () => {
          // Show the form wrapper of the previous form
          $(this.$forms.get(nextStep))
            .closest(this.selectors.wrapper)
            .fadeIn(400);
        });
      });
    }
  }
}
