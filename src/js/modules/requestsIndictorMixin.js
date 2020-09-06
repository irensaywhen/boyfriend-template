export default {
  initializeLoadingIndicators($form) {
    // Save current selectors
    loading = this.selectors.loading;

    // Cache
    $submitButton = $form.find(loading.submitButton);
    template = document.getElementById(loading.spinnerTemplateId);
    buttonContent = $submitButton.html();

    // Event handling
    $form.submit(() => {
      let spinner = template.content.cloneNode(true);
      //Change button
      $submitButton
        .attr('disabled', true)
        .empty()
        .addClass('text-capitalize')
        .text(loading.text)[0]
        .prepend(spinner);
    });

    $document.on('successfulRequest', () => {
      // Change button and remove spinner
      $submitButton
        .attr('disabled', false)
        .removeClass('text-capitalize')
        .html(buttonContent)
        .find(loading.spinner)
        .remove();
    });
  },
};

// Private variables
let $submitButton,
  buttonContent,
  loading,
  template,
  $document = $(document);
