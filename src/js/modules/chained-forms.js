export default class ChainedForms {
  constructor(options) {
    // Bind context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);

    // Save options
    this.selectors = options.selectors;

    this.cacheElements();
    this.setUpEventListeners();
  }

  cacheElements() {
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

  setUpEventListeners() {
    // Show next form when the current is submitted
    this.$forms.on("submitted", (event) => {
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
      this.$backwardButton.click((event) => {
        this.changeForm('backward')
      });
    }

    if (this.selectors.forward) {
      this.$forwardButton.click((event) => {
        this.changeForm('forward');
      });
    }
  }

  changeForm(direction){
    event.stopPropagation();

    let $form = $(event.target)
          .closest(this.selectors.wrapper)
          .find(this.selectors.forms);

    let step = direction === 'forward' ? Number($form.data("step")) + 1 : Number($form.data("step")) - 1;

    $form.closest(this.selectors.wrapper).fadeOut(400, () => {
      // Show the form wrapper of the previous form
      $(this.$forms.get(step))
        .closest(this.selectors.wrapper)
        .fadeIn(400);
    });

    $(document).trigger('chainedForms:switchForm')
  }
}
