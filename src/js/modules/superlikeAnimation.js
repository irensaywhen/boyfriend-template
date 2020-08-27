import IconAnimation from './animatedIcons.js';

export default class SuperlikeAnimation extends IconAnimation {
  constructor(options) {
    super(options);

    // Save meta data
    this.selectors = options.selectors;
    this.ids = options.ids;

    // Bind context
    this.prepareAnimation = this.prepareAnimation.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
    this.finishAnimation = this.finishAnimation.bind(this);

    this._cacheElements();
    this._setUpEventListeners();
  }
  _cacheElements() {
    //super._cacheElements();
  }

  _setUpEventListeners() {
    super._setUpEventListeners();

    $(document).on(
      'webkitAnimationEnd oAnimationEnd msAnimationEnd animationend',
      event => {
        let animationName = event.originalEvent.animationName;
        let iconElements = this.iconElements;

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

  finishAnimation() {}
}
