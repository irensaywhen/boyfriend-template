import Form from './form.js';
import Swal from 'sweetalert2';

export default class ChooseCardForm extends Form {
  constructor(options) {
    super(options);

    const $cvvInput = this.$form.find(this.selectors.cvv);
    const $document = $(document);

    this.popup = options.popup;

    this.$form.on('change', event => {
      const $target = $(event.target);

      if (!$target.is(':radio')) return;

      $cvvInput.val('');
    });

    $document.on('paymentMethodSelection:formHidden', (_, form) => {
      this.formResetHandler(form);
      $cvvInput.blur();
    });

    this.$form.click(event => {
      const $target = $(event.target);

      if ($target.closest(this.selectors.deleteCardBtn).length === 0) return;

      this.handleCardRemoval($target.closest(this.selectors.card));
    });
  }

  handleCardRemoval = $card => {
    const { title, cancelButtonText, confirmButtonText } = this.popup;
    const html = `
    <label class="delete-card w-75 text-center text-dark border-0 shadow-sm py-3 position-relative">
        <h4 class="h5 text-capitalize">${$card.data('card-type')}</h4>
        <p>XXXX-${$card.data('card-digits')}</p>
    </label>
    <h3 class="h5 pt-2">${title}</h3>
    `;
    Swal.fire({
      html,
      cancelButtonText,
      confirmButtonText,
      showCancelButton: true,
      showLoaderOnConfirm: true,
      /**
       * After the user confirms that he wants to use bonus:
       * 1. Make a request to the server
       * 2. If the server is responded, return the response
       */
      preConfirm: () => {
        let { headers, endpoint, method } = this.requests.deleteCard;
        return fetch(endpoint, {
          method,
          headers,
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    })
      .then(result => {
        const { success, title, message } = result.value;
        if (!success) {
          let error = new Error(message);
          error.name = title;

          throw error;
        }

        this.showRequestResult({
          title: title,
          text: message,
          icon: 'success',
        });

        // Remove the card from the markup
        $card.remove();

        $(document).trigger('chooseCardForm:cardDeleted');
      })
      .catch(error => {
        console.log(error);
        // Handle errors here
        this.showRequestResult({
          title: error.name,
          text: error.message,
          icon: 'error',
        });
      });
  };
}
