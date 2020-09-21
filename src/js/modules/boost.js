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

    // Timer and elements to display time
    this.$timer = $(this.selectors.timer.element);
    this.$hours = this.$timer.find(this.selectors.timer.hours);
    this.$minutes = this.$timer.find(this.selectors.timer.minutes);
    this.$seconds = this.$timer.find(this.selectors.timer.seconds);

    // Hide timer after caching
    this.$timer.fadeOut(0);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();
  }

  _useBonus() {
    // Change boost state
    this.activated = true;
    this.finished = false;

    // Change the amount of boosts available
    this._decreaseBonusAmountAvailable();

    // Start timer
    this._startTimer();
  }

  // In this function, we're asking the server to approve bonus usage
  async _prepareBonusUsage() {
    let approved, timestamp, expirationTitle, expirationMessage;

    if (!this.activated && !this.finished) {
      // If the bonus hasn't been activated and finished yet
      ({
        approved,
        timestamp,
        expirationTitle,
        expirationMessage,
      } = await this.askUsageApprovement(this.popups.use));
    } else if (this.activated && this.finished) {
      // If the bonus has been activated and finished
      // Ask about using bonus again
      ({
        approved,
        timestamp,
        expirationTitle,
        expirationMessage,
      } = await this.askUsageApprovement(this.popups.expire));

      if (!approved) {
        // If the user don't want to use boost again
        // Hide the timer
        this.$timer.fadeOut(400);
      }
    }

    if (approved) {
      // If the boost usage was approved by the server
      // Save timestamp
      this.countDownTime = timestamp;
    } else {
      // If the boost usage wasn't approved by the server
      // Discard boost state
      this.activated = false;
      this.finished = false;
    }

    return approved;
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
