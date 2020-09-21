import ServerRequest from './requests.js';

export default class Bonus extends ServerRequest {
  constructor(options) {
    super(options);

    this.classes = options.classes;
    this.popups = options.popups;

    // Bind context
    this._cacheElements = this._cacheElements.bind(this);
    this._setUpEventListeners = this._setUpEventListeners.bind(this);
    this._useBonus = this._useBonus.bind(this);
  }

  _cacheElements() {
    // Save bonus element
    this.$bonus = $(this.selectors.bonus);

    // Save the bonus' data-* attributes
    let dataAttributes = this.$bonus.data();

    for (let attribute in dataAttributes) {
      this[attribute] = dataAttributes[attribute];
    }
  }

  _setUpEventListeners() {
    /**
     * When the bonus is clicked:
     * 1. Check if there are any bonuses available
     * if not, propose buying some
     * 2. If there are bonuses available, delegate starting bonuses usage to their
     * specific classes
     */
    this.$bonus.click(() => {
      if (this.amount === 0) {
        // Fire alert
        this.fireBuyingAlert(this.popups.buy).then(result => {
          if (result.isConfirmed) {
            // Redirect to buying page
            window.location.href = this.redirect;
          }
        });
      } else {
        $(document).trigger('bonus:startUsage');
      }
    });
  }

  /**
   * Update amount of bonuses in the each specific class
   * and on markup data-attribute
   */
  _decreaseBonusAmountAvailable() {
    this.$bonus.attr('data-amount', --this.amount);
  }

  /**
   * Update visual parts of the bonus amount:
   * 1. The text showcasing how many bonuses the user have
   * 2. The text (red if no bonuses available, green if there are at least one bonus)
   */
  _updateAmountOnMarkup() {
    // Update visual indicator of amount
    this.$amount.text(this.amount);

    if (this.amount === 0) {
      // Change the color of the amount indicator
      this.$amount.removeClass('text-success').addClass('text-danger');
    }
  }
}
