export default class PaymentMethodSelection {
  constructor(options) {
    const {
      chooseCard: chooseCardSelectors,
      newCard: newCardSelectors,
    } = options.selectors;

    this.selectors = options.selectors;

    const $chooseCardWrapper = $(chooseCardSelectors.wrapper);
    const $chooseCardForm = $chooseCardWrapper.find(chooseCardSelectors.form);
    const $chooseCardFormInputs = $chooseCardForm.find(
      chooseCardSelectors.input
    );

    const $newCardWrapper = $(newCardSelectors.wrapper).hide();
    const $newCardForm = $newCardWrapper.find(newCardSelectors.form);
    const $newCardFormInputs = $newCardForm.find(newCardSelectors.input);

    // Add new card handler
    $chooseCardWrapper.click(event => {
      const $target = $(event.target);

      if ($target.closest(chooseCardSelectors.switcher).length === 0) return;

      $chooseCardWrapper.fadeOut(200, () => {
        $newCardWrapper.fadeIn(200);

        $chooseCardFormInputs.each((_, elem) => {
          const $elem = $(elem);

          if ($elem.is(':radio')) {
            $elem.prop('checked', false);
          } else {
            elem.value = '';
          }
        });

        $chooseCardForm.find('input[type=radio]').first().prop('checked', true);
      });
    });

    // Remove new card handler
    $newCardWrapper.click(event => {
      const $target = $(event.target);

      if ($target.closest(newCardSelectors.switcher).length === 0) return;

      $newCardWrapper.fadeOut(200, () => {
        $chooseCardWrapper.fadeIn(200);

        // Form inputs cleanup
        $newCardFormInputs.each((_, elem) => {
          const $elem = $(elem);

          if ($elem.is(':checkbox')) {
            $elem.prop('checked', false);
          } else {
            elem.value = '';
          }
        });
      });
    });
  }
}
