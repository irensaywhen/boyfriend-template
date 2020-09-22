export default {
  initStepsMixin(config) {
    ({ selectors, classes } = config);

    // Bind context
    _calculateProgressBarWidth = _calculateProgressBarWidth.bind(this);
    _changeProgressIndicator = _changeProgressIndicator.bind(this);
    _changeStepsIndicators = _changeStepsIndicators.bind(this);
    _changeSteps = _changeSteps.bind(this);
    _showFilledIndicator = _showFilledIndicator.bind(this);

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
    .css('width', _calculateProgressBarWidth());
}

function _setUpEventListeners() {
  // Change the width of the progress indicator when the form is being switched
  $(document)
    .on('chainedForms:switchForm', (event, direction) => {
      _changeProgressIndicator(direction);
    })
    .on('avatar:submitted', event => {
      formFulfilled = true;

      _changeProgressIndicator('forward');
    });

  $(window).resize(() => {
    // Change indicator length here
    $progressBar.css('width', _calculateProgressBarWidth());
  });
}

/**
 * Function responsible for changing everything related to showing steps
 * @param {String} direction - string indicating to which direction did the movement occur
 */
function _changeProgressIndicator(direction) {
  // Change progress bar width
  (function changeProgressBarWidth() {
    $progressBar.css('width', _calculateProgressBarWidth(direction));
  })();

  // Change step indicators
  _changeStepsIndicators(direction);
}

/**
 * Function calculating the width of the progress bar to show
 */
function _calculateProgressBarWidth(direction) {
  if (formFulfilled && direction === 'forward') {
    return '100%';
  } else {
    return `${$($steps[this.step]).position().left + oneHalfStepWidth}px`;
  }
}

/**
 * Function changing the visual appearance of the steps indicators
 * depending on whether the user goes forward or clicks backward button
 * @param {String} direction - the direction in which the form is being changed
 * Possible values: forward, backward
 */
function _changeStepsIndicators(direction) {
  if (
    formFulfilled &&
    this.step === this.$forms.length - 1 &&
    direction === 'forward'
  ) {
    _showFilledIndicator();
  } else {
    _changeSteps(direction);
  }
}

/**
 * 1. Detect the previous and the current step based on the direction
 * 2. If moving forward:
 *  1) Add indicator that the previous step is passed through data-passed attribute
 *  2) If the current step was passed earlier, add an indicator about success
 *  3) If the current step wasn't passed earlier, add an indicator symboling the current step
 * 3. If moving backward:
 *  1) If the previous step wasn't passed, display the previous step as a future step
 *  2) If the previous step was passed, leave success indicator
 * @param {String} direction - 'forward' or 'backward'
 * Signaling to where the overall flow is moving
 */
function _changeSteps(direction) {
  // Cache
  let currentStep = this.step,
    { passed, current, further } = classes,
    $prevStep,
    $currentStep;

  // Set the previous step
  $prevStep =
    direction === 'forward'
      ? $($steps[currentStep - 1])
      : $($steps[currentStep + 1]);
  // Set the current step
  $currentStep = $($steps[currentStep]);

  // Delete styles of the previous step as the current step
  $prevStep.removeClass(current);
  // Add styles to the current step
  $currentStep.addClass(current);

  if (direction === 'forward') {
    // Previous step is passed
    $prevStep.addClass(passed).attr('data-passed', true);

    if ($currentStep.attr('data-passed') === 'true') {
      // Change styles of the current step as a passed step
      $currentStep
        .removeClass(passed)
        .addClass(current)
        .find(selectors.passed)
        .fadeOut(200, () => {
          $currentStep.find(selectors.current).fadeIn(200);
        });
    } else {
      // Remove styles of the current step as a further step
      $currentStep.removeClass(further).find(selectors.current).fadeIn(200);
    }
  } else if (direction === 'backward') {
    if (!($prevStep.attr('data-passed') === 'true')) {
      $prevStep.addClass(further);
    } else {
      $prevStep.addClass(passed);
    }

    // Hide the passed tick and show the current indicator
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

  $prevStep.find(selectors.current).fadeOut(200, () => {
    if (direction === 'forward' || $prevStep.attr('data-passed') === 'true') {
      // Show passed indicator
      $prevStep.find(selectors.passed).fadeIn(200);
    }
  });
}

function _showFilledIndicator() {
  // Cache
  let { passed, current } = classes,
    $prevStep;

  $prevStep = $steps.last();
  // Delete styles of the previous step as the current step
  $prevStep
    .removeClass(current)
    .addClass(passed)
    .attr('data-passed', true)
    .find(selectors.current)
    .fadeOut(200, () => {
      $prevStep.find(selectors.passed).fadeIn(200);
    });
}
