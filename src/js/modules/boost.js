import Bonus from "./bonus.js";

export default class Boost extends Bonus {
  constructor(options) {
    super(options);

    this.type = "boost";

    this.cacheElements();
    this.setUpEventListeners();
  }

  cacheElements() {
    super.cacheElements();

    // Timer and elements to display time
    this.$timer = $(this.selectors.timer.element);
    this.$hours = this.$timer.find(this.selectors.timer.hours);
    this.$minutes = this.$timer.find(this.selectors.timer.minutes);
    this.$seconds = this.$timer.find(this.selectors.timer.seconds);

    // Hide timer after caching
    this.$timer.hide();
  }

  setUpEventListeners() {
    super.setUpEventListeners();
  }

  useBonus() {
    this.startTimer();
    // Activate timer
    this.$timer.show(400);
  }

  startTimer() {
    let intervalId = setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = this.countDownTime - now;

      // Time calculations for hours, minutes and seconds
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display results
      this.$hours.text(hours);
      this.$minutes.text(minutes);
      this.$seconds.text(seconds);

      // If the count down is finished
      if (distance < 0) {
        clearInterval(intervalId);

        // Clear timestamp
        this.timestamp = null;
      }
    }, 1000);
  }
}
