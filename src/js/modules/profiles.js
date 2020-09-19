//import paginationMixin from './paginationMixin.js';
import prepareTemplates from './prepareTemplates.js';
import ServerRequest from './requests.js';

export default class Profiles extends ServerRequest {
  _arePagesHidden = false;

  constructor(options) {
    super(options);

    // Bind context
    this._addNavigationButton = this._addNavigationButton.bind(this);
    this._removeNavigationButton = this._removeNavigationButton.bind(this);
    this._togglePageVisibility = this._togglePageVisibility.bind(this);
    this._changePaginationState = this._changePaginationState.bind(this);
    this._isNavigationButtonShown = this._isNavigationButtonShown.bind(this);

    // Save config options for pagination
    this.paginationConfig = options.pagination;

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
    let { pageItem, activeItem, hiddenPagesItem } = this.selectors;

    this.$paginationContainer.click(event => {
      event.preventDefault();
      event.stopPropagation();
      let $target = $(event.target);

      // Don't do anything if ... or active button is clicked
      if (
        $target.closest(hiddenPagesItem).length === 1 ||
        $target.closest(activeItem).length === 1
      )
        return;

      let $clickedButton = $target.closest(pageItem);
      this._changePaginationState($clickedButton);
    });
  }

  _changePaginationState($clickedButton) {
    let {
        activeItem,
        previousButton,
        nextButton,
        hiddenItems,
        hiddenPagesItem,
      } = this.paginationConfig.classes,
      { pageItem, pageNumber } = this.selectors,
      $paginationContainer = this.$paginationContainer,
      pagesAmount = this.pagesAmount,
      { maxPages } = this.paginationConfig;

    // Add active state to the specified page item
    let setActiveState = $item => {
      $item.addClass(activeItem);
    };

    // Remove current active state
    let removeActiveState = () => {
      $paginationContainer.find(`.${activeItem}`).removeClass(activeItem);
    };

    // Get the current page
    let currentPage = parseInt(
      $paginationContainer.find(`.${activeItem}`).data('page')
    );

    /**
     * Change the current active state
     * If the next button is clicked, the next page item should be active
     * If the previous button is clicked, the previous page item should be active
     * Otherwise, the clicked page item should be active
     */
    if (
      $clickedButton.hasClass(previousButton) ||
      $clickedButton.hasClass(nextButton)
    ) {
      // Next/previous button is clicked
      removeActiveState();

      // Update current page number
      currentPage = $clickedButton.hasClass(nextButton)
        ? ++currentPage
        : --currentPage;

      setActiveState(
        $paginationContainer.find(`${pageNumber}[data-page=${currentPage}]`)
      );
    } else {
      // Button with page number is clicked
      removeActiveState();
      setActiveState($clickedButton);

      // Update the current page number
      currentPage = parseInt($clickedButton.data('page'));
    }

    /**
     * Toggle navigation buttons visibility
     * The current page is storing the page number after selection (active now)
     * So, if the page is the first one, hide the previous button
     * If the page is the last one, hide the next button
     * Show these buttons otherwise
     */
    if (currentPage === 1) {
      this._removeNavigationButton('previous');
    } else if (currentPage === pagesAmount) {
      this._removeNavigationButton('next');
    }

    if (currentPage !== 1 && !this._isNavigationButtonShown('previous')) {
      this._addNavigationButton('previous');
    }
    if (currentPage !== pagesAmount && !this._isNavigationButtonShown('next')) {
      this._addNavigationButton('next');
    }

    // Check the presence of the hidden pages
    if (!this.arePagesHidden) return;

    /**
     * Change visibility of the buttons block
     * If the active button is the first one or the last one
     * Show maximum amount of pages
     */
    if (currentPage === 1 || currentPage === pagesAmount) {
      switch (currentPage) {
        case 1:
          // Show pages in the beginning
          this._togglePageVisibility({
            indexFrom: 1,
            indexTo: pagesAmount - maxPages,
            action: 'show',
          });

          // Hide pages in the end
          this._togglePageVisibility({
            indexFrom: pagesAmount - maxPages + 1,
            indexTo: pagesAmount - 2,
            action: 'hide',
          });

          break;
        case pagesAmount:
          // Show pages in the end
          this._togglePageVisibility({
            indexFrom: pagesAmount - maxPages + 1,
            indexTo: pagesAmount - 1,
            action: 'show',
          });

          // Hide pages in the beginning
          this._togglePageVisibility({
            indexFrom: 1,
            indexTo: pagesAmount - maxPages,
            action: 'hide',
          });
          break;
      }
    } else {
      let isRightNeighbouringHidden, isLeftNeighbouringHidden;

      /**
       * Get visible items
       * By filtering out:
       * 1. navigation buttons (previous and next arrows)
       * 2. all the hidden items
       */
      let getVisibleItems = () => {
        return Array.from($paginationContainer.find(pageItem)).filter(
          item =>
            !item.classList.contains(hiddenItems) &&
            !item.classList.contains(previousButton) &&
            !item.classList.contains(nextButton)
        );
      };

      let visibleItems = getVisibleItems();

      /**
       * Iterate over currently visible items
       * Find the active item among visible items
       * And check if there is a '...' button next to it
       * isRightNeighbouringHidden representing the case when there is a '...' on the right
       * isLeftNeighbouringHidden representing the case when there is a '...' on the left
       */
      for (let i = 0; i < visibleItems.length; i++) {
        let $item = $(visibleItems[i]);

        if ($item.hasClass(activeItem)) {
          // Check if the right neighbouring is '...' button
          isRightNeighbouringHidden = $(visibleItems[i + 1]).hasClass(
            hiddenPagesItem
          );
          // Check if the left neighbouring is '...' button
          isLeftNeighbouringHidden = $(visibleItems[i - 1]).hasClass(
            hiddenPagesItem
          );

          break;
        }
      }

      // Don't do anything if the '...' button wasn't found next to the active item
      if (!isRightNeighbouringHidden && !isLeftNeighbouringHidden) return;

      // Remove the page representing hidden items
      let $hiddenItemsButton = $paginationContainer
        .find(`.${hiddenPagesItem}`)
        .remove()
        .first();

      let $activeItem = $paginationContainer.find(`.${activeItem}`);

      /**
       * Show new page item:
       * If the page item on the right is hidden:
       * 1. Show the item on the right
       * 2. Check if the next to the newly shown item is hidden
       * 3. If there is a hidden item to the right, show '...' button
       * ------------------------------------------------------------
       * If the page item on the left is hidden:
       * 1. Show the item on the left
       * 2. Check if the previous to the newly shown item is hidden
       * 3. If there is a hidden item to the left, show '...' button
       */
      if (isRightNeighbouringHidden) {
        let $nextToActiveItem = $activeItem.next().removeClass(hiddenItems);

        if ($nextToActiveItem.next().hasClass(hiddenItems)) {
          $nextToActiveItem.after($hiddenItemsButton.clone(true));
        }
      } else if (isLeftNeighbouringHidden) {
        let $prevToActiveItem = $activeItem.prev().removeClass(hiddenItems);

        if ($prevToActiveItem.prev().hasClass(hiddenItems)) {
          $prevToActiveItem.before($hiddenItemsButton.clone(true));
        }
      }

      /**
       * Get all the visible items after showing one hidden item
       * If there are more than five visible items, we need to hide one:
       * If the item on the right was shown, hide one item on the left
       * If the item on the left was shown, hide one item on the right
       */
      visibleItems = getVisibleItems();

      if (visibleItems.length > 5) {
        if (isRightNeighbouringHidden) {
          $activeItem
            .prev()
            .prev()
            .addClass(hiddenItems)
            .after($hiddenItemsButton.clone(true));
        } else if (isLeftNeighbouringHidden) {
          $activeItem
            .next()
            .next()
            .addClass(hiddenItems)
            .after($hiddenItemsButton.clone(true));
        }
      }
    }
  }

  _preparePagination() {
    let { maxPages } = this.paginationConfig;

    if (maxPages < 3) {
      throw new Error('Cannot set maximum amount of pages to less than 3');
    } else if (maxPages > 5) {
      throw new Error('Showing more than five pages is not working yet');
    }

    // Cache
    let pagesAmount = (this.pagesAmount = this.$paginationContainer.find(
      this.selectors.pageNumber
    ).length);

    // Hide extra pages if there is more than maximum allowed pages
    if (pagesAmount > maxPages) {
      this.arePagesHidden = true;

      this._togglePageVisibility({
        indexFrom: maxPages - 1,
        indexTo: pagesAmount - 2,
        action: 'hide',
      });
    }

    // Show "next" button if there is more than one page
    if (pagesAmount > 1) this._addNavigationButton('next');
  }

  // Manipulating navigation buttons
  _addNavigationButton(direction) {
    if (direction !== 'previous' && direction !== 'next') return;

    let $paginationContainer = this.$paginationContainer;

    direction === 'next'
      ? $paginationContainer.append(this.paginationTemplates.nextItem)
      : $paginationContainer.prepend(this.paginationTemplates.previousItem);
  }
  _removeNavigationButton(direction) {
    if (direction !== 'previous' && direction !== 'next') return;

    let $paginationContainer = this.$paginationContainer,
      { previousButton, nextButton } = this.selectors;

    direction === 'next'
      ? $paginationContainer.find(nextButton).remove()
      : $paginationContainer.find(previousButton).remove();
  }

  /**
   * Function telling whether navigation button is shown
   * The navigation button is specified by the direction parameter
   * @param {String} direction - 'next' references the right button, while
   * 'previous' references the left button
   */
  _isNavigationButtonShown(direction) {
    if (direction !== 'previous' && direction !== 'next') return;

    let $paginationContainer = this.$paginationContainer,
      { previousButton, nextButton } = this.selectors;

    return direction === 'next'
      ? $paginationContainer.find(nextButton).length === 1
      : $paginationContainer.find(previousButton).length === 1;
  }

  /**
   * Function hiding/showing pages and hiding/showing ... button
   * instead of the hidden pages
   * @param {indexFrom} Number - index from which perform the action, including
   * @param {indexTo} Number - index to which perform the action, including
   * @param {action} String - specifying the current action - hide or show
   */
  _togglePageVisibility({ indexFrom, indexTo, action }) {
    if (action !== 'hide' && action !== 'show') return;

    let selectors = this.selectors,
      $paginationContainer = this.$paginationContainer;

    let { hiddenPagesItem } = selectors,
      { hiddenItems } = this.paginationConfig.classes,
      $pageItems = $paginationContainer.find(selectors.pageNumber);
    /**
     * Iterate over all the page items
     * If the passed action is hide, hide a range of items specified,
     * Otherwise, of the passed action is show, show a range of items
     */
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
      : $paginationContainer.find(hiddenPagesItem).remove();
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

  // Presense of hidden pages
  get arePagesHidden() {
    return this._arePagesHidden;
  }
  set arePagesHidden(areHidden) {
    if (typeof areHidden !== 'boolean')
      throw new Error('arePagesHidden should be boolean');
    this._arePagesHidden = areHidden;
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
