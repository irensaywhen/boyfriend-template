import Bonus from './bonus.js';
import SuperlikeAnimation from './superlikeAnimation.js';

export default class Superlike extends Bonus {
  constructor(options) {
    super(options);

    // Save popups
    this.popups = options.popups;

    // Initiate animation for icon in popup
    this.animation = new SuperlikeAnimation(options.animation);

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

    let $document = $(document);

    $document.on('superlikeModal:onBeforeOpen', (event, modal) => {
      // Start modal preparation
      this.animationPreparation = this.animation.prepareAnimation(modal);
    });

    $document.on('superlikeModal:onOpen', (event, modal) => {
      // Run animation
      this.animation.startAnimation();
    });

    $document.on('superlikeModal:onAfterClose', (event, modal) => {
      // Prepare animation for further use
      console.log('Modal closed');
    });
  }

  _useBonus() {
    // Call alert here with custom animation for superlike icon
    this.fireSendAlert(this.popups.send);

    // Change the amount of bonuses available
    this._decreaseBonusAmountAvailable();

    $(document).trigger('present:send', { type: 'superlike' });
  }

  _prepareBonusUsage() {
    console.log('Preparing bonus usage...');
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
