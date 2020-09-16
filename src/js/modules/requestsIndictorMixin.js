export default {
  initializeLoadingIndicators($form) {
    // Bind context
    this.initializeLoadingIndicators = this.initializeLoadingIndicators.bind(
      this
    );

    // Save loading data to the form
    this.loading = this.selectors.loading;
    // Save information about submit button
    this.$submitButton = $form.find(this.loading.submitButton);
    this.buttonContent = this.$submitButton.html();

    // Cache
    template = document.getElementById(this.loading.spinnerTemplateId);

    // Event handling
    $form.submit(() => {
      // Don't show loading indicator if the form isn't valid
      if (!this.$form.valid()) return;

      let spinner = template.content.cloneNode(true),
        loading = this.loading,
        $submitButton = this.$submitButton;

      // Preserve width and get rid of the previous content
      $submitButton.css('min-width', $submitButton.outerWidth() + 'px').empty();

      // Change button text
      loading.text === undefined
        ? $submitButton.text('').addClass('text-center')
        : $submitButton.text(loading.text).addClass('text-capitalize');

      //Change button state
      $submitButton.attr('disabled', true)[0].prepend(spinner);
    });

    $(this).on('successfulRequest', () => {
      // Change button and remove spinner
      this.$submitButton
        .attr('disabled', false)
        .removeClass('text-capitalize')
        .html(this.buttonContent)
        .css('min-width', '')
        .find(this.loading.spinner)
        .remove();
    });
  },
};

// Private variables
let template;
