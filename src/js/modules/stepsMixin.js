export default {
  initStepsMixin(config) {
    ({ selectors, classes } = config);

    // Bind context
    _calculateProgressBarWidth = _calculateProgressBarWidth.bind(this);
    _changeProgressIndicator = _changeProgressIndicator.bind(this);
    _changeStepsIndicators = _changeStepsIndicators.bind(this);

    // Prepare elements and event listeners
    _cacheElements.call(this);
    _setUpEventListeners.call(this);

    // Adjust labels alignment
    (function adjustLabelsAlignment() {
      $steps.find(selectors.labels).each((index, label) => {
        let $label = $(label);
        $label.css('left', `-${$label.outerWidth() / 2 - oneHalfStepWidth}px`);
      });
    })();
  },
};

// Private variables
let selectors,
  classes,
  formFulfilled = false,
  $wrapper,
  $steps,
  $progressBar,
  oneHalfStepWidth;

// Private functions

function _cacheElements() {
  // Steps wrapper
  $wrapper = $(selectors.wrapper);
  // Steps icons
  $steps = $wrapper.find(selectors.steps);
  // Hide passed icons
  $wrapper.find(selectors.passed).hide();

  // Hide current icons
  $steps.each((index, item) => {
    if (index !== 0) {
      $(item).find(selectors.current).hide();
    }
  });

  // Calculate half of the width of the step indicator
  oneHalfStepWidth = $steps.first().outerWidth() / 2;

  // Prepare progress bar
  $progressBar = $wrapper
    .find(selectors.progressBar)
    .css('width', `${_calculateProgressBarWidth()}px`);
}

function _setUpEventListeners() {
  $(document).on('chainedForms:switchForm', (event, direction) => {
    _changeProgressIndicator(direction);
  });

  $(document).on('avatar:submitted', event => {
    formFulfilled = true;

    _changeProgressIndicator('forward');
  });
}

/**
 * Function responsible for changing everything related to showing steps
 * @param {String} direction - string indicating to which direction did the movement occur
 */
function _changeProgressIndicator(direction) {
  // Change progress bar width
  (function changeProgressBarWidth() {
    $progressBar.css('width', `${_calculateProgressBarWidth()}px`);
  })();
  // Change step indicators
  _changeStepsIndicators(direction);
}

function _calculateProgressBarWidth() {
  if (formFulfilled) {
    return '100%';
  } else {
    return $($steps[this.step]).position().left + oneHalfStepWidth;
  }
}

function _changeStepsIndicators(direction) {
  let currentStep = this.step,
    { passed, current, further } = classes;
  // Cache
  let $prevStep =
      direction === 'forward'
        ? $($steps[currentStep - 1])
        : $($steps[currentStep + 1]),
    $currentStep = $($steps[currentStep]);

  // Delete styles of the previous step as the current step
  $prevStep.removeClass(current);
  // Add styles to the current step
  $currentStep.addClass(current);

  if (direction === 'forward') {
    // Add styles to the the previous step as a passed step
    $prevStep.addClass(passed);
    // Remove styles of the current step as a further step
    $currentStep.removeClass(further).find(selectors.current).fadeIn(200);
  } else {
    // If direction is backward
    // Add styles to the previous step as a further
    $prevStep.addClass(further);

    $currentStep
      .removeClass(passed)
      .find(selectors.passed)
      .fadeOut({
        duration: 200,
        queue: false,
        complete: () => {
          // Show current step indicator
          $currentStep.find(selectors.current).fadeIn(200);
        },
      });
  }

  // Hide current indicator
  $prevStep.find(selectors.current).fadeOut(200, () => {
    if (direction === 'forward') {
      // Show passed indicator
      $prevStep.find(selectors.passed).fadeIn(200);
    }
  });
}
