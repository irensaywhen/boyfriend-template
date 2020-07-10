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
};
