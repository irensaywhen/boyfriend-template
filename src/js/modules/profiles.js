//import paginationMixin from './paginationMixin.js';

export default class Profiles {
  constructor(options) {
    //let { pagination: paginationConfig } = options;

    // Save config options for pagination
    this.paginationConfig = options.pagination;
    this.selectors = options.selectors;
    this.requests = options.requests;

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {}

  _setUpEventListeners() {
    $();
  }

  _prepareTemplates() {}

  // Getters and setters
  // Pagination configuration
  get paginationConfig() {
    return this._paginationConfig;
  }
  set paginationConfig(config) {
    if (!this._paginationConfig) {
      this._paginationConfig = config;
    }
  }

  // Selectors
  get selectors() {
    return this._selectors;
  }
  set selectors(selectors) {
    if (!this._selectors) {
      this._selectors = selectors;
    }
  }

  // Requests
  get requests() {
    return this._request;
  }
  set requests(requests) {
    if (!this._requests) {
      this._requests = requests;
    }
  }

  // Ids
  get templateIds() {
    return this._templateIds;
  }
  set templateIds(ids) {
    if (!this._templateIds) {
      this._templateIds = ids;
    }
  }
}
