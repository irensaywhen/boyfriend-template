export default {
  initStepsMixin(stepsConfig) {
    selectors = stepsConfig.selectors;

    // Caching
    _cacheElements.call(this);

    // Adjust labels alignment
    (function adjustLabelsAlignment() {
      let oneHalfStepWidth = $steps.first().outerWidth() / 2;

      $steps.find(selectors.labels).each((index, label) => {
        let $label = $(label);
        $label.css('left', `-${$label.outerWidth() / 2 - oneHalfStepWidth}px`);
      });
    })();
  },
};

// Private variables
let selectors, $steps;

// Private functions

function _cacheElements() {
  $steps = $(selectors.steps);
}
