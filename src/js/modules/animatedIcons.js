export default class IconAnimation {
  constructor(options) {}

  _cacheElements() {}

  _prepareAnimation(modal) {
    // Cache
    let selectors = this.selectors,
      ids = this.ids,
      iconElements = selectors.iconElements;

    // Get icon copy
    let icon = document.getElementById(ids.icon).content.cloneNode(true);

    // Save icon
    this.icon = icon;

    // Prepare empty container for icon elements
    this.iconElements = {};

    // Save icon elements
    for (let element in iconElements) {
      let elements = icon.querySelectorAll(iconElements[element]);

      // Save jQuery collection of each element(s)
      this.iconElements[`$${element}`] = $(elements);
    }

    // Insert bonus icon to the modal
    modal.querySelector(this.selectors.insertContainer).prepend(this.icon);
  }

  _prepareIcon() {}

  _setUpEventListeners() {}
}
