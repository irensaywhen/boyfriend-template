import helper from "./helper.js";

export default class Ad {
  constructor(options) {
    // Setup internal name for ad wrapper
    this.adWrapperClass = "pagination-wrapper";

    this.selectors = options["selectors"];
    this.placementConfig = options["placementConfig"];
    this.elementInsertAfter = options["elementInsertAfter"];

    this.$adContainer = $(this["selectors"]["container"]).fadeOut(0);
    this.$profilesContainer = $(this.selectors["profilesContainer"]);

    let $document = $(document);

    $document.on("pagination:beforeInit", (event, data) => {
      if (data) {
        // If pagination is initiated after request
        // Get ad with the passed advertisement type
        this._getAd(data["advertisementType"]);
        this._makeAdWrapper();
      }

      this._insertAd();
    });

    $document.on("pagination:beforeDestroyAfterResize", () => {
      this._removeAds();
    });
  }

  _getAd(type) {
    this.$ad = this.$adContainer.find(`[data-type='${type}']`).clone();
  }

  _makeAdWrapper() {
    this.$adWrapper = $("<div></div>")
      .addClass("col-12 mt-4 mb-5")
      .addClass(this.adWrapperClass);
  }

  _insertAd() {
    let viewportRange = helper.getViewportRange(),
      place = this.placementConfig[viewportRange],
      element = this.elementInsertAfter["element"],
      htmlClass = this.elementInsertAfter["class"];

    let formula = String(2 * place) + "n" + "+" + String(place);

    this.$profilesContainer
      .find(`${element}.${htmlClass}:nth-of-type(${formula})`)
      .after(this.$adWrapper.clone().append(this.$ad.clone()));

    this.$profilesContainer.trigger("ad:afterInsert");
  }

  _removeAds() {
    let ads = this.$profilesContainer
      .find(this.selectors["genericClass"])
      .closest("." + this.adWrapperClass)
      .remove();
  }

  // Getters and setters

  // Ads container
  set $adContainer($element) {
    if (this._adContainer) return;
    this._adContainer = $element;
  }
  get $adContainer() {
    return this._adContainer;
  }

  // Profiles container
  set $profilesContainer($element) {
    if (this._profilesContainer) return;
    this._profilesContainer = $element;
  }
  get $profilesContainer() {
    return this._profilesContainer;
  }
}
