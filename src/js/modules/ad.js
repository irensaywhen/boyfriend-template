import helper from "./helper.js";

export default class Ad {
  constructor(options) {
    // For debugging
    // This information will be recieved through request
    this.type = "default";

    this.selectors = options["selectors"];
    this.placementConfig = options["placementConfig"];
    this.elementInsertAfter = options["elementInsertAfter"];

    this.$adContainer = $(this["selectors"]["container"]);
    this.$profilesContainer = $(this["selectors"]["profilesContainer"]);

    let $document = $(document);

    $document.on("searchForm:afterSuccessfulRequest", (event, data) => {
      this._getAd();
      this._makeAdWrapper();
      this._insertAd();
    });

    $document.on("pagination:afterDestroy", () => {
      // Find ads inside the pagination container
      // And remove it
      this._removeAd();
      // Then - insert ads again
      this._insertAd();
    });

    $document.on("pagination:afterInit", () => {});
  }

  _getAd() {
    this.$ad = this.$adContainer.find(`[data-type='${this.type}']`).clone();
  }
  _makeAdWrapper() {
    this.$adWrapper = $("<div></div>").addClass("col-12 mt-4 mb-5");
  }
  _insertAd() {
    let viewportRange = helper.getViewportRange(),
      place = this.placementConfig[viewportRange],
      element = this.elementInsertAfter["element"],
      htmlClass = this.elementInsertAfter["class"];

    let formula = String(2 * place) + "n" + "+" + String(place);

    let profile = this.$profilesContainer
      .find(`${element}.${htmlClass}:nth-of-type(${formula})`)
      .css("background", "red")
      .after(this.$adWrapper.clone().append(this.$ad.clone()));

    this.$profilesContainer.trigger("ad:afterInsert");
  }
  _removeAd() {
    let ads = this.$profilesContainer.find(`[data-type='${this.type}']`);
    //.remove();

    console.log(ads);
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
