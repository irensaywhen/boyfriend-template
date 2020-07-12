import Bonus from "./bonus.js";

export default class Boost extends Bonus {
  constructor(options) {
    super(options);

    this.cacheElements();
    this.setUpEventListeners();
  }

  cacheElements() {
    super.cacheElements();
  }

  setUpEventListeners() {
    super.setUpEventListeners();
  }

  useBonus() {
    super.useBonus();

    // Activate timer
  }
}
