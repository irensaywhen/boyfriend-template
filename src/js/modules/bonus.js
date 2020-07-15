import ServerRequest from "./requests.js";

export default class Bonus extends ServerRequest {
  constructor(options) {
    super(options);

    // Bind context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);
    this.useBonus = this.useBonus.bind(this);
    this.clickedBonusHandler = this.clickedBonusHandler.bind(this);

    // Save redirect address
    this.redirect = options.redirect;

    // Save popup data
    this.popupData = options.popupData;

    console.log(this.popupData);

    // Reference request information for the popup usage
    this.popupData.request = this.requests.use;
  }

  cacheElements() {
    // Save bonus element
    this.$bonus = $(this.selectors.bonus);

    // Save amount of bonuses available
    let dataAttributes = this.$bonus[0].dataset;

    for (let attribute in dataAttributes) {
      // Save all the data-* attributes
      this[attribute] = dataAttributes[attribute];
    }
  }

  setUpEventListeners() {
    this.$bonus.click(() => this.clickedBonusHandler());
  }

  /**
   * Asyncronous event handler for bonus usage
   */
  async clickedBonusHandler() {
    if (this.amount === 0) {
      // If there are no bonuses available
      window.location.href = this.redirect;
    } else {
      let approved;

      if (this.type === "boost") {
        let timestamp, expirationTitle, expirationMessage;

        ({ approved, timestamp } = await this.askUsageApprovement(
          this.popupData
        ));

        // Save timestamp
        this.countDownTime = timestamp;
      }

      if (approved) {
        this.useBonus();
      }
    }
  }
}
