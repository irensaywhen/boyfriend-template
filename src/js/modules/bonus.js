import ServerRequest from './requests.js';
import getUrlParams from './getUrlParams.js';
import removeSearchParams from './removeSearchParams.js';

export default class Bonus extends ServerRequest {
  constructor(options) {
    super(options);

    this.classes = options.classes;
    this.popups = options.popups;
    this.redirectToUse = options.redirectToUse;

    // Bind context
    this._cacheElements = this._cacheElements.bind(this);
    this._setUpEventListeners = this._setUpEventListeners.bind(this);
    this._useBonus = this._useBonus.bind(this);

    this.isUsedOnThisPage = options.isUsedOnThisPage;
    this.isSelectUserBeforeUse = options.isSelectUserBeforeUse;
  }

  _cacheElements() {
    let selectors = this.selectors;

    // Save bonus element
    this.$bonus = $(selectors.bonus);

    // Save the bonus' data-* attributes
    let dataAttributes = this.$bonus.data();

    for (let attribute in dataAttributes) {
      this[attribute] = dataAttributes[attribute];
    }

    if (this.isSelectUserBeforeUse) {
      let userList = selectors.userList;

      this.$userListModal = $(userList.modal);
    }
  }

  _setUpEventListeners() {
    $(window).on('load', () => {
      let bonusType = getUrlParams('bonus'),
        identifier = getUrlParams('identifier'),
        permissionIdentifier = localStorage.getItem(bonusType);

      if (!bonusType || !permissionIdentifier || this.type !== bonusType)
        return;

      localStorage.removeItem(bonusType);

      if (identifier !== permissionIdentifier) return;

      setTimeout(this._useBonus, 100, bonusType);
    });
    /**
     * When the bonus is clicked:
     * 1. Check if there are any bonuses available
     * if not, propose buying some
     * 2. If there are bonuses available, delegate starting bonuses usage to their
     * specific classes
     */
    this.$bonus.click(event => {
      if (this.amount === 0) {
        // Fire alert
        this.fireBuyingAlert(this.popups.buy).then(result => {
          if (result.isConfirmed) {
            // Redirect to buying page
            window.location.href = this.redirect;
          }
        });
      } else if (this.isSelectUserBeforeUse) {
        $(document).trigger(
          'bonus:selectUserBeforeUsage',
          this.$bonus.data('type')
        );
      } else {
        $(document).trigger('bonus:startUsage', this.$bonus.data('type'));
      }
    });

    $(document).on('bonus:selectUserBeforeUsage', (event, type) => {
      if (this.type !== type) return;

      // Show userlist modal
      this.$userListModal.modal('show');
    });

    if (!this.$userListModal) return;

    /**
     * Handling user selection
     * 1. Get the clicked user
     * 2. Get the clicked's user Id and show error if there is no id
     * 3. Add id to search params of the endpoint
     */
    this.$userListModal.click(event => {
      let $user = $(event.target).closest(this.selectors.userList.user);

      if ($user.length === 0) return;

      let userId = $user.data('user-id');

      if (!userId) {
        this.showRequestResult({
          title: 'Oops!',
          text: 'Something went wrong :(',
          icon: 'error',
        });
        return;
      }

      let endpoint = this.requests.use.endpoint;

      // Remove previously saved params to avoid errors
      removeSearchParams(endpoint);

      endpoint.searchParams.set('userId', userId);

      $(document).trigger('bonus:startUsage', this.$bonus.data('type'));
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
      this.$amount
        .removeClass('bonus-notzero-amount')
        .addClass('bonus-zero-amount');
    }
  }
}
