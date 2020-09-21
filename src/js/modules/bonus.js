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
    // Why the function is being called here?
    //this.$bonus.click(() => this._startUsingBonus());
    this.$bonus.click(async () => {
      if (this.activated && !this.finished) {
        // If the bonus has already been activated and not finished yet
        // Forbid any actions with it
        return;
      } else if (this.amount === 0) {
        // Fire alert
        this.fireBuyingAlert(this.popups.buy).then(result => {
          if (result.isConfirmed) {
            // Redirect to buying page in case of the user approvement
            window.location.href = this.redirect;
          }
        });
      } else {
        // If there are bonuses available

        // Negotiate bonus usage with the server
        let approved = await this._prepareBonusUsage();

        if (approved) {
          // Start bonus usage
          this._useBonus();
        }
      }
    });
  }

  _proposeBuyingBonus() {
    // Fire alert
    this.fireBuyingAlert(this.popups.buy).then(result => {
      if (result.isConfirmed) {
        // Redirect to buying page in case of the user approvement
        window.location.href = this.redirect;
      }
    });
  }

  _decreaseBonusAmountAvailable() {
    this.$bonus.attr('data-amount', --this.amount);
  }

  _updateAmountOnMarkup() {
    // Update visual indicator of amount
    this.$amount.text(this.amount);

    if (this.amount === 0) {
      // Change the color of the amount indicator
      this.$amount.removeClass('text-success').addClass('text-danger');
    }
  }
}
