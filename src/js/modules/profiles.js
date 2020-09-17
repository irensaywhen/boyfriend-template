//import paginationMixin from './paginationMixin.js';
import prepareTemplates from './prepareTemplates.js';

export default class Profiles {
  constructor(options) {
    //let { pagination: paginationConfig } = options;

    // Bind context
    this._addNavigationButton = this._addNavigationButton.bind(this);
    this._removeNavigationButton = this._removeNavigationButton.bind(this);
    this._togglePageVisibility = this._togglePageVisibility.bind(this);

    // Save config options for pagination
    this.paginationConfig = options.pagination;
    this.selectors = options.selectors;
    this.requests = options.requests;

    // Templates preparation
    let {
      profile: profileTemplateId,
      pagination: paginationTemplateIds,
    } = this.selectors.templateIds;

    // Get templates for pagination
    this.paginationTemplates = prepareTemplates(paginationTemplateIds);

    // Get profiles template
    // Set it up a bit later

    this._cacheElements();
    this._setUpEventListeners();
    this._preparePagination();
  }

  _cacheElements() {
    let selectors = this.selectors;

    this.$paginationContainer = $(selectors.pagination);
  }

  _setUpEventListeners() {}

  _preparePagination() {
    let $container = this.$paginationContainer,
      selectors = this.selectors,
      { maxPages, hiddenItemsClass } = this.paginationConfig;
    let $pageItems = $container.find(selectors.pageItem);
    let pagesAmount = $pageItems.length;

    // Hide extra pages if there is more than maximum allowed pages
    if (pagesAmount > maxPages)
      this._togglePageVisibility({
        indexFrom: maxPages - 1,
        indexTo: pagesAmount - 2,
        hiddenItemsClass,
        $pageItems,
        action: 'hide',
      });

    // Show "next" button if there is more than one page
    if (pagesAmount > 1) this._addNavigationButton('next');
  }

  // Manipulating navigation buttons
  _addNavigationButton(direction) {
    direction === 'next'
      ? this.$paginationContainer.append(this.paginationTemplates.nextItem)
      : this.$paginationContainer.prepend(
          this.paginationTemplates.previousItem
        );
  }
  _removeNavigationButton(direction) {}

  // Changing pages visibility depending on the passed action
  _togglePageVisibility({
    indexFrom,
    indexTo,
    hiddenItemsClass,
    $pageItems,
    action,
  }) {
    console.log(`Index from: ${indexFrom}`);
    console.log(`Index to: ${indexTo}`);
    console.log($pageItems);

    // Hide extra buttons
    $pageItems.each((index, item) => {
      if (index >= indexFrom && index <= indexTo) {
        action === 'hide'
          ? $(item).addClass(hiddenItemsClass)
          : $(item).removeClass(hiddenItemsClass);
      }
    });
    console.log(typeof this.paginationTemplates.hiddenItems);
    console.log($pageItems.get(indexFrom - 1));
    // Show indicator representing the hidden buttons
    action === 'hide'
      ? $($pageItems.get(indexFrom - 1)).after(
          this.paginationTemplates.hiddenItems
        )
      : console.log('Hiding ... button');
  }

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

  // Pagination templates
  get paginationTemplates() {
    return this._paginationTemplates;
  }
  set paginationTemplates(templates) {
    if (!this._paginationTemplates) {
      this._paginationTemplates = templates;
    }
  }

  // Profile template
  get profileTemplate() {
    return this._profileTemplate;
  }
  set profileTemplate(template) {
    if (!this._profileTemplate) {
      this._profileTemplate = template;
    }
  }
}
