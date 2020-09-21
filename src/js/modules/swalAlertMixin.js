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

  fireBuyingAlert({ title, text, confirmButtonText, cancelButtonText }) {
    return Swal.fire({
      title,
      text,
      cancelButtonText,
      confirmButtonText,
      showCancelButton: true,
      confirmButtonColor: '#ff0068',
      cancelButtonColor: '#bbb',
    });
  },

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
  askUsageApprovement({
    title,
    text = '',
    confirmButtonText,
    cancelButtonText,
    imageUrl,
    imageAlt,
  }) {
    return Swal.fire({
      title,
      text,
      cancelButtonText,
      confirmButtonText,
      showCancelButton: true,
      confirmButtonColor: '#ff0068',
      cancelButtonColor: '#bbb',
      imageUrl,
      imageAlt,
      imageWidth: '150px',
      imageHeight: '150px',
      showLoaderOnConfirm: true,
      /**
       * After the user confirms that he wants to use bonus:
       * 1. Make a request to the server
       * 2. In case of successful response:
       *  1) Show popup depending on the value of 'success'
       *  2) Return recieved data
       */
      preConfirm: () => {
        let { headers, endpoint, method, body } = this.requests.use;
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
    }).then(result => {
      let json = result.value;

      if (json) {
        let { title, text, success } = result.value;

        // Set the icon for popup
        let icon = success ? 'success' : 'error';

        // Show request result
        this.showRequestResult({ title, text, icon });

        // Maybe change to switch statement when other bonuses will be added
        if (this.type === 'boost') {
          return {
            approved: success,
            title: json.title,
            message: json.message,
            timestamp: json.timestamp,
          };
        }
      } else {
        return { approved: false };
      }
    });
  },
};
