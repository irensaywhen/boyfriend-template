export default class Pagination {
  constructor(config) {
    let selectors = config.selectors;
    this.options = config.options;

    this.$container = $(selectors.container);
    this.$pagination = $(selectors.pagination);

    this._init = false;
  }

  init() {
    if (!this._init) {
      this.$pagination.jPages(this.options);
    }
  }

  destroy() {
    if (this._init) {
      this.$pagination.jPages("destroy");
    }
  }

  // Preventing resetting containers after initialization
  get $container() {
    return this._$container;
  }

  set $container($container) {
    if (!this._$container) {
      this._$container = $container;
    }
  }

  get $pagination() {
    return this._$pagination;
  }

  set $pagination($container) {
    if (!this._$pagination) {
      this._$pagination = $container;
    }
  }
}
