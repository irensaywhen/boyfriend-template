import IconAnimation from './animatedIcons.js';

export default class SuperlikeAnimation extends IconAnimation {
  constructor(options) {
    super(options);
  }

  _setUpEventListeners() {
    $(document).on(
      'webkitAnimationEnd oAnimationEnd msAnimationEnd animationend',
      event => {
        let animationName = event.originalEvent.animationName,
          target = event.target,
          iconElements = this.iconElements;

        // Add more specific statement here
        // to not to calculate all the if statemests for all animations together

        if (!target.closest(this.selectors.popup)) return;

        if (animationName === 'superlike-stars') {
          // Add final color to the stars
          iconElements.$star.addClass('fill-pink');
        } else if (animationName === 'superlike-hand') {
          // Play message animation
          iconElements.$message.addClass('superlike-message');

          // Play stars animation
          iconElements.$star.addClass('superlike-stars');
        }
      }
    );
  }

  prepareAnimation(modal) {
    return new Promise(resolve => {
      // Append icon through calling parent method
      super._prepareAnimation(modal);

      // Resolve the promise
      resolve('fulfilled');
    });
  }

  startAnimation() {
    // Start the first part of the animation
    this.iconElements.$hand.addClass('superlike-hand');
  }
}
