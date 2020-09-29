import Bonus from './bonus.js';
import PremiumAnimation from './premiumAnimation.js';

// Lets store everything required for the buy premium forms in templates
// And display these templates in modals or on a separate page
// With a "back" button at the top

export default class SponsorPremium extends Bonus {
  constructor(options) {
    super(options);

    // Save popups
    this.popups = options.popups;

    // Initiate animation for icon in popup
    this.animation = new PremiumAnimation(options.animation);

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    super._cacheElements();
  }

  _setUpEventListeners() {
    super._setUpEventListeners();

    // For setting up animation
    this.$bonus.click(() => {
      this._useBonus();
    });

    $(document)
      .on('premiumModal:onBeforeOpen', (event, modal) => {
        // Start modal preparation
        this.animationPreparation = this.animation.prepareAnimation(modal);
      })
      .on('premiumModal:onOpen', (event, modal) => {
        // Run animation
        this.animation.startAnimation();
      });
  }

  _useBonus() {
    // Call alert here with custom animation for premium icon
    this.fireSendAlert(this.popups.send);

    // Show sponsoring premium in the chat
    //$(document).trigger('present:send', { type: 'premium' });
  }
}
