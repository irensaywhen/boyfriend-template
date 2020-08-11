import helper from "./helper.js";

export default class Ad {
  initialRequest = false;

  constructor(options) {
    // For debugging
    // This information will be recieved through request
    this.type = "default";

    // Setup internal name for ad wrapper
    this.adWrapperClass = "pagination-wrapper";

    this.selectors = options["selectors"];
    this.placementConfig = options["placementConfig"];
    this.elementInsertAfter = options["elementInsertAfter"];

    this.$adContainer = $(this["selectors"]["container"]);
    this.$profilesContainer = $(this.selectors["profilesContainer"]);

    let $document = $(document);

    //$document.on("searchForm:beforeRequest", () => {
    //  this._inserted = false;
    //});

    $document.on("searchForm:afterSuccessfulRequest", (event, data) => {
      // Here profiles are already displayed
      //if (!this.initialRequest) {
      console.log("After successful request");
      this._getAd();
      this._makeAdWrapper();
      this._insertAd();
      // }
    });

    $document.on("pagination:beforeDestroy", () => {
      // Find ads inside the pagination container
      // And remove it
      this._removeAds();
      // Then - insert ads again
      //this._insertAd();
    });

    $document.on("pagination:afterDestroy", () => {
      console.log("pagination:afterDestroy");
      this._insertAd();
    });
  }

  _getAd() {
    this.$ad = this.$adContainer.find(`[data-type='${this.type}']`).clone();
    console.log("Getting ad");
  }
  _makeAdWrapper() {
    this.$adWrapper = $("<div></div>")
      .addClass("col-12 mt-4 mb-5")
      .addClass(this.adWrapperClass);
    console.log("Making ad wrapper");
  }
  _insertAd() {
    let viewportRange = helper.getViewportRange(),
      place = this.placementConfig[viewportRange],
      element = this.elementInsertAfter["element"],
      htmlClass = this.elementInsertAfter["class"];

    let formula = String(2 * place) + "n" + "+" + String(place);

    this.$profilesContainer
      .find(`${element}.${htmlClass}:nth-of-type(${formula})`)
      .css("background", "red")
      .after(this.$adWrapper.clone().append(this.$ad.clone()));

    console.log("Inserting ad");
    //this._inserted = true;
    this.$profilesContainer.trigger("ad:afterInsert");
  }
  _removeAds() {
    let ads = this.$profilesContainer
      .find(this.selectors["genericClass"])
      .closest("." + this.adWrapperClass)
      .remove();

    console.log(ads);
    console.log("ads removed");
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
