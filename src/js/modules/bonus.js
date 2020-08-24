import ServerRequest from './requests.js';

export default class Bonus extends ServerRequest {
  constructor(options) {
    super(options);

    // Bind context
    this._cacheElements = this._cacheElements.bind(this);
    this._setUpEventListeners = this._setUpEventListeners.bind(this);
    this._useBonus = this._useBonus.bind(this);
    this._startUsingBonus = this._startUsingBonus.bind(this);
    this._prepareBonusUsage = this._prepareBonusUsage.bind(this);
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
    this.$bonus.click(() => this._startUsingBonus());
  }

  /**
   * Asyncronous event handler for bonus usage
   */
  async _startUsingBonus() {
    if (this.activated && !this.finished) {
      // If the bonus has already been activated and not finished yet
      // Forbid any actions with it
      return;
    } else if (this.amount === 0) {
      // If there are no bonuses available
      // Redirect

      let type = this.type;

      if (type === 'boost') {
        window.location.href = this.redirect;
      } else if (type === 'superlike') {
        this._proposeBuyingBonus();
        // Fire alert here
        // If the user approve it
        // Redirect to buying page
        // If no, don't do anything
      }
    } else {
      let approved = await this._prepareBonusUsage();

      if (approved) {
        this.amount = --this.amount;

        //Update data-amount attribute of the bonus
        this.$bonus.attr('data-amount', this.amount);

        // Start bonus usage
        this._useBonus();
      }
    }
  }
  _proposeBuyingBonus() {
    // Fire alert
    this.fireBuyingAlert(this.buyingPopupData).then(result => {
      if (result) {
        window.location.href = this.redirect;
      }
    });
  }
}
