import ServerRequest from "./requests.js";

export default class Bonus extends ServerRequest {
  constructor(options) {
    super(options);

    // Bind context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);
    this.useBonus = this.useBonus.bind(this);
    this.startUsingBonus = this.startUsingBonus.bind(this);
    this.prepareBonusUsage = this.prepareBonusUsage.bind(this);

    // Save popup data
    this.popupData = options.popupData;

    // Reference request information for the popup usage
    this.popupData.request = this.requests.use;
  }

  cacheElements() {
    // Save bonus element
    this.$bonus = $(this.selectors.bonus);

    // Save the bonus' data-* attributes
    let dataAttributes = this.$bonus.data();

    for (let attribute in dataAttributes) {
      this[attribute] = dataAttributes[attribute];
    }
  }

  setUpEventListeners() {
    this.$bonus.click(() => this.startUsingBonus());
  }

  /**
   * Asyncronous event handler for bonus usage
   */
  async startUsingBonus() {
    if (this.activated && !this.finished) {
      // If the bonus has already been activated and not finished yet
      // Forbid any actions with it
      return;
    } else if (this.amount === 0) {
      // If there are no bonuses available
      // Redirect
      window.location.href = this.redirect;
    } else {
      let approved = await this.prepareBonusUsage();

      if (approved) {
        this.amount = --this.amount;

        //Update data-amount attribute of the bonus
        this.$bonus.attr("data-amount", this.amount);

        // Start bonus usage
        this.useBonus();
      }
    }
  }
}
