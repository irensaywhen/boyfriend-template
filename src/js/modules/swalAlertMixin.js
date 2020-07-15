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
    confirmButtonText,
    cancelButtonText,
    imageUrl,
    ImageAlt,
    request,
  }) {
    return Swal.fire({
      title,
      cancelButtonText,
      confirmButtonText,
      showCancelButton: true,
      confirmButtonColor: "#ff0068",
      cancelButtonColor: "#d33",
      imageUrl,
      ImageAlt,
      imageWidth: "150px",
      imageHeight: "150px",
      showLoaderOnConfirm: true,
      // Request telling the server thas user wants to use the bonus
      preConfirm: () => this.requestBonusUsage(request),
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.value) {
        // If the server answered
        let json = result.value;

        if (json.success) {
          // If the server approved bonus usage
          // Show popup about success
          this.showRequestResult({
            title: json.title,
            text: json.message,
            icon: "success",
          });

          // Usage is approved
          if (this.type === "boost") {
            // If bonus type is boost
            return { approved: true, timestamp: json.timestamp };
          }
        } else {
          // If the server restricted bonus usage
          // Show success about error
          this.showRequestResult({
            title: json.title,
            text: json.message,
            icon: "error",
          });

          // Usage is not approved
          if (this.type === "boost") {
            // If bonus type is boost
            return { approved: false, timestamp: null };
          }
        }
      }
    });
  },
};
