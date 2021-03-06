import Bonus from './bonus.js';
import SuperlikeAnimation from './superlikeAnimation.js';

export default class Superlike extends Bonus {
  constructor(options) {
    super(options);

    if (this.isUsedOnThisPage) {
      // Initiate animation for icon in popup
      this.animation = new SuperlikeAnimation(options.animation);
    }

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    super._cacheElements();

    // Amount of bonuses available
    this.$amount = this.$bonus.find(this.selectors.amount);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();

    $(document)
      .on('superlikeModal:onBeforeOpen', (event, modal) => {
        // Start modal preparation
        this.animationPreparation = this.animation.prepareAnimation(modal);
      })
      .on('superlikeModal:onOpen', (event, modal) => {
        // Run animation
        this.animation.startAnimation();
      })
      .on('bonus:startUsage', (event, { type }) => {
        if (type !== 'superlike') return;

        this.fireAlertWithRequest(this.popups.use)
          .then(result => {
            if (!result) return;

            if (!result.success) throw new Error('Something went wrong :(');

            if (this.isUsedOnThisPage) {
              this._useBonus();
            } else {
              this._redirectToUseBonus(result);
            }
          })
          .catch(error => {
            this.showRequestResult({
              title: error.name,
              text: error.message,
              icon: 'error',
            });
          });
      });
  }

  _useBonus(type = this.type) {
    if (type !== this.type) return;

    // Call alert here with custom animation for superlike icon
    this.fireSendAlert(this.popups.send);

    // Change the amount of bonuses available
    this._decreaseBonusAmountAvailable();
    this._updateAmountOnMarkup();

    $(document).trigger('present:send', { type: 'superlike' });
  }
}
