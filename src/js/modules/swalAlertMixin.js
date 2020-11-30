import Swal from 'sweetalert2';

export default {
  /**
   *
   * @param {String} title - Title to show in the popup
   * @param {String} text - Text to show under the title in the popup
   * @param {String} icon - One of the pre-defined icons of the plugin
   */
  showRequestResult({ title, text, icon }) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      timer: 2000,
      showConfirmButton: false,
      showCloseButton: true,
    });
  },

  showTimerExpired({ title, text }) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showConfirmButton: false,
      showCloseButton: true,
    });
  },

  // Alert to show when there is no bonuses available
  fireBuyingAlert({ title, text, confirmButtonText, cancelButtonText }) {
    return Swal.fire({
      title,
      text,
      cancelButtonText,
      confirmButtonText,
      showCancelButton: true,
      confirmButtonColor: '#fb374b',
      cancelButtonColor: '#bbb',
    });
  },

  // Alert for bonus usage animation
  fireSendAlert({ title, text, timer, customClass }) {
    // Cache document element
    let $document = $(document);

    // Show popup
    return Swal.fire({
      title,
      text,
      showConfirmButton: false,
      customClass,
      timer,
      showClass: {
        popup: 'animate__bounceIn',
      },
      onBeforeOpen: modal => {
        // Trigger event to prepare modal
        $document.trigger(`${this.type}Modal:onBeforeOpen`, modal);
      },
      onOpen: modal => {
        this.animationPreparation.then(() => {
          // Run animation
          $document.trigger(`${this.type}Modal:onOpen`, modal);
        });
      },
    });
  },

  /**
   *
   * @param {String} title - Popup title
   * @param {String} confirmButtonText - Text of the confirmation button
   * @param {String} cancelButtonText - Text of the cancel button
   * @param {String} imageUrl - Link to the image to show in the popup
   * @param {String} imageAlt - Image alttext
   */
  fireAlertWithRequest({
    title,
    text = '',
    confirmButtonText,
    cancelButtonText,
    imageUrl,
    imageAlt,
    requestName,
  }) {
    return Swal.fire({
      title,
      text,
      cancelButtonText,
      confirmButtonText,
      showCancelButton: true,
      confirmButtonColor: '#fb374b',
      cancelButtonColor: '#bbb',
      imageUrl,
      imageAlt,
      imageWidth: '150px',
      imageHeight: '150px',
      showLoaderOnConfirm: true,
      /**
       * After the user confirms that he wants to use bonus:
       * 1. Make a request to the server
       * 2. If the server is responded, return the response
       */
      preConfirm: () => {
        let { headers, endpoint, method, body } = this.requests[requestName];
        return fetch(endpoint, {
          method,
          headers,
          body,
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
      .then(result => result.value)
      .catch(error => {
        // Handle errors here
        this.showRequestResult({
          title: error.name,
          text: error.message,
          icon: 'error',
        });
      });
  },
};
