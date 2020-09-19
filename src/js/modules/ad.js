import prepareTemplates from './prepareTemplates.js';
import helper from './helper.js';

export default class Ad {
  constructor(options) {
    // Bind context
    this._insertAds = this._insertAds.bind(this);

    let selectors = (this.selectors = options.selectors);
    this.requests = options.requests;
    this.placementConfig = options.placementConfig;
    this.displayOnLoad = options.displayOnLoad;

    this.templates = prepareTemplates(selectors.templateIds);

    this._setUpEventListeners();
    this._insertAds('custom');
  }

  _setUpEventListeners() {
    $(document)
      .on('profiles:afterInsert', (event, adType) => {
        this._insertAds(adType);
      })
      .ready(() => {
        console.log('Document is ready');
      });
  }

  _removeAds() {}

  _insertAds(adType) {
    console.log('Inserting ads!');
    let viewport = helper.getViewportRange(),
      template = this.templates[adType];
    let insertAfter = this.placementConfig[viewport];

    let $profiles = $(this.selectors.profiles);
    let profielsAmount = $profiles.length;

    $profiles.each((index, profile) => {
      ++index;
      if (index % insertAfter === 0 && index !== profielsAmount) {
        $(profile).after(template);
      }
    });
    // Get current screen size
    console.log(helper.getViewportRange());
    // Iterate over profiles
    // Insert ads in appropriate places
  }
}
