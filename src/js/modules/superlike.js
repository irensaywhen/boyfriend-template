import Bonus from './bonus.js';

export default class Superlike extends Bonus {
  constructor(options) {
    super(options);

    // Bind context

    // Save popups
    this.popups = options.popups;

    // Reference request information for the popup usage
    //this.popupData.request = this.requests.use;

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    super._cacheElements();

    this.$amount = $(this.selectors.amount);

    //Create expiration popup based on the generic popup
    //this.expirationPopupData = Object.assign({}, this.popupData);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();
  }

  _useBonus() {
    console.log('Using bonus...');

    // Call alert here with custom animation for superlike icon
    this.fireSendAlert(this.popups.send);

    $(document).trigger('present:send', { type: 'superlike' });
  }

  _prepareBonusUsage() {
    console.log('Preparing bonus usage...');
    // Ask server about sending superlike
    // If the server will approve usage
    // Send it to the user

    // Temporary return true for debuggins purposes
    return true;
  }
}
