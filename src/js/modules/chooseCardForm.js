import Form from './form.js';

export default class ChooseCardForm extends Form {
  constructor(options) {
    super(options);

    const $cvvInput = this.$form.find(this.selectors.cvv);
    const $document = $(document);

    this.$form.on('change', event => {
      const $target = $(event.target);

      if (!$target.is(':radio')) return;

      $cvvInput.val('');
    });

    $document.on('paymentMethodSelection:formHidden', (_, form) => {
      this.formResetHandler(form);
      $cvvInput.blur();
    });
  }
}
