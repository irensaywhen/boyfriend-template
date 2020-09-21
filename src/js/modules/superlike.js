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

    // Amount of bonuses available
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

    $(document).on('bonus:startUsage', (event, type) => {
      if (type !== 'superlike') return;

      this.askUsageApprovement(this.popups.use)
        .then(result => {
          if (!result) return;

          let { success, title, text } = result;

          // Set icon and show popup with it
          let icon = success ? 'success' : 'error';
          this.showRequestResult({ title, text, icon });

          if (success) this._useBonus();
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

  _useBonus() {
    // Call alert here with custom animation for superlike icon
    this.fireSendAlert(this.popups.send);

    // Change the amount of bonuses available
    this._decreaseBonusAmountAvailable();
    this._updateAmountOnMarkup();

    $(document).trigger('present:send', { type: 'superlike' });
  }
}
