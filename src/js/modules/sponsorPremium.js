import Bonus from './bonus.js';
import PremiumAnimation from './premiumAnimation.js';

export default class SponsorPremium extends Bonus {
  constructor(options) {
    super(options);

    // Save popups
    this.popups = options.popups;

    if (this.isUsedOnThisPage) {
      // Initiate animation for icon in popup
      this.animation = new PremiumAnimation(options.animation);
    }

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    super._cacheElements();

    let selectors = this.selectors;

    this.$modal = $(selectors.modal);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();

    $(document)
      .on('premiumModal:onBeforeOpen', (event, modal) => {
        // Start modal preparation
        this.animationPreparation = this.animation.prepareAnimation(modal);
      })
      .on('premiumModal:onOpen', (event, modal) => {
        // Run animation
        this.animation.startAnimation();
      })
      .on('bonus:startUsage', (event, type) => {
        if (type !== 'premium') return;

        // Start showing modals here with buying premium forms
        this.$modal.modal('show');
      })
      .on('form:submitted', (event, data) => {
        let { $form, response } = data;

        // Handle only the case when this is the form inside sponsoring premium modal dialog
        if (
          !$form.closest(this.selectors.modal) ||
          $form.closest(this.selectors.modal).find('form').last()[0] !==
            $form[0]
        )
          return;

        this.$modal.modal('hide');

        if (this.isUsedOnThisPage) {
          setTimeout(this._useBonus, 300);
        } else {
          const identifier = response.identifier;
          localStorage.setItem(this.type, identifier);

          // Redirect to chat to start using premium there
          window.location.assign(
            `${this.redirectToUse}?bonus=premium&identifier=${identifier}`
          );
        }
      });
  }

  _useBonus(type = this.type) {
    if (type !== this.type) return;
    // Call alert here with custom animation for premium icon
    this.fireSendAlert(this.popups.send);

    // Show sponsoring premium in the chat
    $(document).trigger('present:send', { type: 'premium' });
  }
}
