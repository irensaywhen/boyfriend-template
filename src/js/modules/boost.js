import Bonus from './bonus.js';

export default class Boost extends Bonus {
  constructor(options) {
    super(options);

    this.type = 'boost';

    // Bind context
    this._displayTime = this._displayTime.bind(this);

    // Save initial state of the boost
    this.activated = false;
    this.finished = false;

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    super._cacheElements();

    let selectors = this.selectors;

    // Timer and elements to display time
    this.$timer = $(selectors.timer.element);
    this.$hours = this.$timer.find(selectors.timer.hours);
    this.$minutes = this.$timer.find(selectors.timer.minutes);
    this.$seconds = this.$timer.find(selectors.timer.seconds);

    // Hide timer after caching
    this.$timer.fadeOut(0);

    if (selectors.amount) {
      this.$amount = this.$bonus.find(selectors.amount);
    }
  }

  _setUpEventListeners() {
    super._setUpEventListeners();

    /**
     * If there are at least one bonus available, handle its usage
     * 1. If the boost is activated, don't do anything
     * 2. If the boost is not activated:
     *  1) Choose between 'use' and 'expire' popup.
     *     - Show use popup when the user activates boost for the first time
     *     - Show expire popup when the popup was expired
     *       and the user is being asked about reusing it
     *  2) Get the approvement and the timestamp from the server
     *     - Check timestamp for validity. If it is invalid, throw error
     *  3) If the usage is approved:
     *     - Start using the boost
     *  4) If the usage is not approved:
     *     - Hide timer
     *     - Deactivate boost
     */
    $(document).on('bonus:startUsage', (event, type) => {
      if (type !== 'boost') return;

      if (this.activated && !this.finished) return;

      // Choose config for popup
      if (!this.activated && !this.finished) {
        var popup = this.popups.use;
      } else if (this.activated && this.finished) {
        var popup = this.popups.expire;
      }

      this.askUsageApprovement(popup)
        .then(result => {
          if (!result) return;

          let { success, title, text, timestamp } = result;

          // Handle the case with negative timestamp
          let distance = timestamp - new Date().getTime();
          if (distance <= 0) throw new RangeError('Negative time!');

          // Set icon and show popup with it
          let icon = success ? 'success' : 'error';
          this.showRequestResult({ title, text, icon });

          if (success) {
            this.countDownTime = timestamp;
            this._useBonus();
          } else {
            if (this.activated && this.finished) this.$timer.fadeOut(400);

            this.activated = false;
            this.finished = false;
          }
        })
        .catch(error => {
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: 'error',
          });
        });
    });
  }

  _useBonus() {
    // Change boost state
    this.activated = true;
    this.finished = false;

    // Change the amount of boosts available
    this._decreaseBonusAmountAvailable();

    // Update amount if the selector is presented
    if (this.$amount) {
      this._updateAmountOnMarkup();
    }

    // Start timer
    this._startTimer();
  }

  _startTimer() {
    let intervalId = setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = this.countDownTime - now;

      // If the count down is finished
      if (distance <= 1000) {
        this._displayTime(0, 0, 0);

        clearInterval(intervalId);

        // Change the state of the bonus
        this.activated = true;
        this.finished = true;

        // Clear timestamp
        this.timestamp = null;

        // Ask user to use more
        this.$bonus.click();
      }

      // Time calculations for hours, minutes and seconds
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this._displayTime(hours, minutes, seconds);

      this.$timer.fadeIn(400);
    }, 1000);
  }

  _displayTime(hours, minutes, seconds) {
    // Add zeros for better displaying
    if (minutes < 10) {
      minutes = '0' + String(minutes);
    }
    if (seconds < 10) {
      seconds = '0' + String(seconds);
    }
    // Display results
    this.$hours.text(hours);
    this.$minutes.text(minutes);
    this.$seconds.text(seconds);
  }
}
