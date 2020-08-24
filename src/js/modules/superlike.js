import Bonus from './bonus.js';

export default class Superlike extends Bonus {
  constructor(options) {
    super(options);

    this.type = 'superlike';

    // Bind context
    //this.cacheElements = this.cacheElements.bind(this);
    //this._setUpEventListeners = this._setUpEventListeners.bind(this);
    //this.startUsingBonus = this.startUsingBonus.bind(this);
    //this._prepareBonusUsage = this._prepareBonusUsage.bind(this);

    // Save popup data
    this.popupData = options.popupData;

    // Reference request information for the popup usage
    //this.popupData.request = this.requests.use;
  }
}
