//import paginationMixin from './paginationMixin.js';
import prepareTemplates from './prepareTemplates.js';

export default class Profiles {
  constructor(options) {
    //let { pagination: paginationConfig } = options;

    // Bind context
    this._addNavigationButton = this._addNavigationButton.bind(this);
    this._removeNavigationButton = this._removeNavigationButton.bind(this);
    this._togglePageVisibility = this._togglePageVisibility.bind(this);
    this._changePaginationState = this._changePaginationState.bind(this);

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

  _setUpEventListeners() {
    let { hiddenItemsLabel } = this.paginationConfig,
      { pageItem, activeItem } = this.selectors;

    this.$paginationContainer.click(event => {
      event.preventDefault();
      event.stopPropagation();
      let $target = $(event.target);

      // Don't do anything if ... or active button is clicked
      if (
        $target.closest(hiddenItemsLabel).length === 1 ||
        $target.closest(activeItem).length === 1
      )
        return;

      this._changePaginationState($target.closest(pageItem));
    });
  }

  _changePaginationState($clickedButton) {
    let {
        activeItem,
        previousButton,
        nextButton,
      } = this.paginationConfig.classes,
      { pageItem } = this.selectors,
      $paginationContainer = this.$paginationContainer;

    // Add active state to the specified page item
    let setActiveState = $item => {
      $item.addClass(activeItem);
    };
    let removeActiveState = () => {
      $paginationContainer.find(`.${activeItem}`).removeClass(activeItem);
    };

    // If next/previous button is clicked
    if (
      $clickedButton.hasClass(previousButton) ||
      $clickedButton.hasClass(nextButton)
    ) {
      // Get the current page
      let currentPage = parseInt(
        $paginationContainer.find(`.${activeItem}`).data('page')
      );

      if ($clickedButton.hasClass(previousButton)) {
        // Add active state to the previous item
        if (currentPage === 2) {
          // If we're on the second page, hide previous button
          this._removeNavigationButton('previous');
        }

        if (currentPage === this.pagesAmount) {
          // If we're on the second to last page, show next button
          this._addNavigationButton('next');
        }
      } else if ($clickedButton.hasClass(nextButton)) {
        if (currentPage === this.pagesAmount - 1) {
          // If we're on the second to last page hide next button
          this._removeNavigationButton('next');
        }

        if (currentPage === 1) {
          // If we're on the first page show previous button
          this._addNavigationButton('previous');
        }
      }

      // Remove current active state
      removeActiveState();

      currentPage = $clickedButton.hasClass(nextButton)
        ? ++currentPage
        : --currentPage;
      // Set active state on the previous page
      $paginationContainer
        .find(`${pageItem}[data-page=${currentPage}]`)
        .addClass(activeItem);
    }

    //if ($clickedButton.hasClass(nextButton)) {
    //  // Get the current page
    //  let currentPage = parseInt(
    //    $paginationContainer.find(`.${activeItem}`).data('page')
    //  );
    //
    //  if (currentPage === this.pagesAmount - 1) {
    //    // If we're on the second to last page hide next button
    //    this._removeNavigationButton('next');
    //  }
    //
    //  if (currentPage === 1) {
    //    // If we're on the first page show previous button
    //    this._addNavigationButton('previous');
    //  }
    //
    //  // Remove current active state
    //  removeActiveState();
    //
    //  // Set active state on the next page
    //  $paginationContainer
    //    .find(`${pageItem}[data-page=${++currentPage}]`)
    //    .addClass(activeItem);
    //}
    // Remove active state from the current active item
    //let removeActiveState = () => {
    //  this.$paginationContainer.find(`.${activeItem}`).removeClass(activeItem);
    //};

    // If next/previous button is clicked, change active state to one
    // If another button is clicked, add active state to that button
    // Also, handle showing additional pages/moving ... button here
  }

  _preparePagination() {
    // Cache
    let $container = this.$paginationContainer,
      selectors = this.selectors,
      { maxPages } = this.paginationConfig,
      { hiddenItems } = this.paginationConfig.classes;
    let $pageItems = $container.find(selectors.pageItem);
    let pagesAmount = (this.pagesAmount = $pageItems.length);

    // Hide extra pages if there is more than maximum allowed pages
    if (pagesAmount > maxPages)
      this._togglePageVisibility({
        indexFrom: maxPages - 1,
        indexTo: pagesAmount - 2,
        hiddenItems,
        $pageItems,
        action: 'hide',
      });

    // Show "next" button if there is more than one page
    if (pagesAmount > 1) this._addNavigationButton('next');
  }

  // Manipulating navigation buttons
  _addNavigationButton(direction) {
    let $paginationContainer = this.$paginationContainer;

    direction === 'next'
      ? $paginationContainer.append(this.paginationTemplates.nextItem)
      : $paginationContainer.prepend(this.paginationTemplates.previousItem);
  }
  _removeNavigationButton(direction) {
    // Cache
    let $paginationContainer = this.$paginationContainer,
      { previousButton, nextButton } = this.selectors;

    direction === 'next'
      ? $paginationContainer.find(nextButton).remove()
      : $paginationContainer.find(previousButton).remove();
  }

  // Changing pages visibility depending on the passed action
  _togglePageVisibility({
    indexFrom,
    indexTo,
    hiddenItems,
    $pageItems,
    action,
  }) {
    // Hide extra buttons
    $pageItems.each((index, item) => {
      if (index >= indexFrom && index <= indexTo) {
        action === 'hide'
          ? $(item).addClass(hiddenItems)
          : $(item).removeClass(hiddenItems);
      }
    });

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
