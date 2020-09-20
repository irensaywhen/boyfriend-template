import prepareTemplates from './prepareTemplates.js';
import helper from './helper.js';

export default class Ad {
  constructor(options) {
    // Bind context
    this._insertAds = this._insertAds.bind(this);
    this._removeAds = this._removeAds.bind(this);

    // Save config
    let selectors = (this.selectors = options.selectors);
    this.requests = options.requests;
    this.placementConfig = options.placementConfig;
    this.adType = this.displayOnLoad = options.displayOnLoad;

    // Prepare templates for usage
    this.templates = prepareTemplates(selectors.templateIds);

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    this.$profilesContainer = $(this.selectors.profilesContainer);
  }

  _setUpEventListeners() {
    $(document)
      .on('profiles:afterInsert', (event, adType) => {
        this._insertAds(adType);
      })
      .ready(() => {
        this._insertAds(this.displayOnLoad);
      });

    /**
     * 1. Get the current viewport range
     * 2. If it has changed, remove ads and re-insert them
     * 3. Save new viewport range
     */
    $(window).resize(() => {
      let viewportRange = helper.getViewportRange();
      if (viewportRange !== this.viewportRange) {
        this._removeAds();
        this._insertAds(this.adType);
        this.viewportRange = viewportRange;
      }
    });
  }

  _removeAds() {
    this.$profilesContainer.find(this.selectors.ads).remove();
  }

  /**
   * In order to insert ads, this function:
   * 1. Gets the current viewport range according to bootstrap breakpoints
   * 2. Checks after which profile it needs to insert ad for this viewport
   * 3. Iterates over profiles and if the conditions match, insert the ad
   *
   * @param {String} adType - representing the ad. It can be either 'custom' or 'default'
   * Depending on the provided value, the particular ad will be inserted in all the places
   */
  _insertAds(adType) {
    let viewport = (this.viewportRange = helper.getViewportRange()),
      template = this.templates[adType];
    let insertAfter = this.placementConfig[viewport];
    this.adType = adType;

    let $profiles = $(this.selectors.profiles);
    let profielsAmount = $profiles.length;

    $profiles.each((index, profile) => {
      ++index;
      if (index % insertAfter === 0 && index !== profielsAmount) {
        $(profile).after(template);
      }
    });
  }
}
