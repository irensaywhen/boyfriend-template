import ServerRequest from "./requests.js";

export default class Bonus extends ServerRequest {
  constructor(options) {
    super(options);

    // Bind context
    this.cacheElements = this.cacheElements.bind(this);
    this.setUpEventListeners = this.setUpEventListeners.bind(this);
    this.useBonus = this.useBonus.bind(this);

    // Save redirect address
    this.redirect = options.redirect;
  }

  cacheElements() {
    // Save bonus element
    this.$bonus = $(this.selectors.bonus);

    // Save amount of bonuses available
    let dataAttributes = this.$bonus[0].dataset;

    for (let attribute in dataAttributes) {
      // Save all the data-* attributes
      this[attribute] = dataAttributes[attribute];
      console.log(this[attribute]);
    }
  }

  setUpEventListeners() {
    this.$bonus.click((event) => {
      if (this.amount === 0) {
        // If there are no bonuses available
        window.location.href = this.redirect;
      } else {
        // Add popup here asking whether the user want to use the bonus
        // And for the button insode the popup, add event listener to use bonus
        // Use the bonus
        this.useBonus();
      }
    });
  }

  async useBonus() {
    //let response;
    //
    //try {
    //  // Tell server that the user want to use boost
    //  this.makeRequest({
    //    headers: this.requests.use.headers,
    //    method: this.requests.use.method,
    //    endpoint: this.requests.use.endpoint,
    //    body: JSON.stringify({ type: this.type }),
    //  });
    //} catch (error) {}
    //
    //// Activate popup only if the boost
    //this.bonusUsed(this.popupData.activated);
    //this.amount = this.amount - 1;
    //
    //// Change data-amount attribute
    //this.$bonus.attr("data-amount", this.amount);
  }
}
