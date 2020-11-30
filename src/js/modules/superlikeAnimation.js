import IconAnimation from './animatedIcons.js';
import { timingSafeEqual } from 'crypto';

export default class SuperlikeAnimation extends IconAnimation {
  constructor(options) {
    super(options);

    this.type = 'superlikeAnimation';
  }

  _setUpEventListeners() {
    $(document).on(
      'webkitAnimationEnd oAnimationEnd msAnimationEnd animationend',
      event => {
        if (this.type !== 'superlikeAnimation') return;

        let animationName = event.originalEvent.animationName,
          target = event.target,
          iconElements = this.iconElements;

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

  /**
   * This method is called before modal with animated icon is being opened
   * @param {HTMLElement} modal - popup that will be opened. The icon will be
   * inserted in this popup
   */
  prepareAnimation(modal) {
    return new Promise(resolve => {
      // Append icon through calling parent method
      super._prepareAnimation(modal);

      // Resolve the promise
      resolve('fulfilled');
    });
  }

  startAnimation() {
    // Start the first part of the animation by animation hand movement
    this.iconElements.$hand.addClass('superlike-hand');
  }
}
