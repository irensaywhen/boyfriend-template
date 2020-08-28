import Bonus from './bonus.js';
import PhotoAnimation from './photoAnimation.js';

export default class Photo extends Bonus {
  constructor(options) {
    super(options);

    // Save popups
    this.popups = options.popups;

    // Initiate animation for icon in popup
    this.animation = new PhotoAnimation(options.animation);

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    super._cacheElements();

    // Save amount element
    this.$amount = this.$bonus.find(this.selectors.amount);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();
  }

  _useBonus() {
    console.log('Using photo bonus...');
    // Here we need to ask the user to make a photo or upload it
    // And then send the message with it
    // Also, if the user discard photo changes, we need to add amount of bonuses available
    // Maybe, we can change the amount of bonuses available only if the user finishes the usage
    // As well as in the superlike usage
    //$(document).trigger('present:send', { type: 'photo' });
  }

  _prepareBonusUsage() {
    console.log('Preparing photo bonus usage...');
    // Ask server about sending superlike
    // If the server will approve usage
    // Send it to the user

    // Temporary return true for debuggins purposes
    return true;
  }

  _decreaseBonusAmountAvailable() {
    super._decreaseBonusAmountAvailable();
    super._updateAmountOnMarkup();
  }
}
