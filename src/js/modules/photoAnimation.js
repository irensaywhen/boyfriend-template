import IconAnimation from './animatedIcons.js';

export default class PhotoAnimation extends IconAnimation {
  // Save type
  type = 'photo';

  constructor(options) {
    super(options);

    this.type = 'photo';
  }
}
