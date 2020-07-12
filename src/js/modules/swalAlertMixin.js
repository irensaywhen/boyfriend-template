export default {
  showRequestResult({ title, text, icon }) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      showConfirmButton: false,
      showCloseButton: true,
    });
  },
  askUsageApprovement({ title, confirmButtonText, cancelButtonText }) {
    Swal.fire({
      title,
      cancelButtonText,
      confirmButtonText,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#ff0068",
      cancelButtonColor: "#d33",
    });
  },
};
