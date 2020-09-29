import IconAnimation from './animatedIcons.js';

export default class PremiumAnimation extends IconAnimation {
  constructor(options) {
    super(options);

    this.type = 'premiumAnimation';
  }

  _setUpEventListeners() {
    $(document)
      .on(
        'webkitAnimationEnd oAnimationEnd msAnimationEnd animationend',
        event => {
          if (this.type !== 'premiumAnimation') return;

          let animationName = event.originalEvent.animationName,
            iconElements = this.iconElements;

          if (animationName === 'zoom') {
            iconElements.$premiumIcon.removeClass('premium-person');
          } else if (animationName === 'premium-star-animation') {
            iconElements.$star
              .removeClass('premium-star-animation')
              .addClass('fill-pink default-scale');
          }
        }
      )
      .on(
        'webkitAnimationStart oAnimationstart msAnimationStart animationstart',
        event => {
          if (this.type !== 'premiumAnimation') return;

          let animationName = event.originalEvent.animationName,
            iconElements = this.iconElements;

          if (animationName === 'zoom') {
            iconElements.$star
              .removeClass('default-scale fill-pink')
              .addClass('premium-star-animation');
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

  /**
   * This method is specific to each class responsible for handling icon animation
   * It is being called whenever the animation is prepared and popup
   * in which the icon will be animated is opened
   */
  startAnimation() {
    // Start icon animation by starting premium person's animation
    this.iconElements.$premiumIcon.addClass('premium-person');
  }
}
