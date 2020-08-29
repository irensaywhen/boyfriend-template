export default class IconAnimation {
  constructor(options) {
    // Save meta data
    this.selectors = options.selectors;
    this.ids = options.ids;

    // Bind context
    this.prepareAnimation = this.prepareAnimation.bind(this);
    this._prepareAnimation = this._prepareAnimation.bind(this);
    this.startAnimation = this.startAnimation.bind(this);

    this._setUpEventListeners();
  }

  _prepareAnimation(modal) {
    // Cache
    let selectors = this.selectors,
      ids = this.ids,
      iconElements = selectors.iconElements;

    // Get icon copy
    let icon = document.getElementById(ids.icon).content.cloneNode(true);

    // Prepare empty container for icon elements
    this.iconElements = {};

    // Save icon elements
    for (let element in iconElements) {
      let elements = icon.querySelectorAll(iconElements[element]);
      console.log(elements);

      // Save jQuery collection of each element(s)
      this.iconElements[`$${element}`] = $(elements);
    }

    // Insert bonus icon to the modal
    modal.querySelector(selectors.insertContainer).prepend(icon);
  }
}
