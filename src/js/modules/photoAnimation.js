import IconAnimation from './animatedIcons.js';

export default class PhotoAnimation extends IconAnimation {
  constructor(options) {
    super(options);
  }

  _setUpEventListeners() {
    // Listen to animation events
    $(document).on(
      'webkitAnimationEnd oAnimationEnd msAnimationEnd animationend',
      event => {
        let animationName = event.originalEvent.animationName,
          target = event.target,
          iconElements = this.iconElements;

        if (!target.closest(this.selectors.popup)) return;

        if (animationName === 'jackInTheBox') {
          iconElements.$icon.removeClass('photo-camera');
          iconElements.$shadow.addClass('photo-flash');
        } else if (animationName === 'photo-flash') {
          iconElements.$shadow.removeClass('photo-flash');
        }
      }
    );
  }

  // Maybe we can put animation preparation function into animated icons class also
  prepareAnimation(modal) {
    return new Promise(resolve => {
      // Append icon through calling parent method
      super._prepareAnimation(modal);

      // Resolve the promise
      resolve('fulfilled');
    });
  }

  startAnimation() {
    // Add the class initializing the animation
    this.iconElements.$icon.addClass('photo-camera');
  }
}
