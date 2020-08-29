import IconAnimation from './animatedIcons.js';

export default class PhotoAnimation extends IconAnimation {
  // Save type
  type = 'photo';

  constructor(options) {
    super(options);
  }

  _setUpEventListeners() {
    // Should set event listeners to handle beginning and ending of the animation
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
    // Should add the first class initiating the animation
  }
}
