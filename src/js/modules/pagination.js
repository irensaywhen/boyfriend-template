import helper from "./helper.js";
import Ad from "./ad.js";

export default class Pagination {
  constructor(config) {
    let selectors = config.selectors;

    this.$container = $(selectors.container);
    this.$pagination = $(selectors.pagination);

    // Options for the plugin
    this.pluginOptions = config.pluginOptions;

    // Configuration for breakpoints
    this.perPageConfig = config.perPageConfig;

    this._init = false;

    $(window).resize(() => {
      let viewportRange = helper.getViewportRange();

      if (!(viewportRange !== this._viewportRange) || !this._init) return;

      this.destroy();
      this.init();
    });

    $(document).on("searchForm:beforeRequest", () => {
      this.$container.empty();
      this.destroy();
    });

    $(document).on("searchForm:afterSuccessfulRequest", () => {
      this.init();
    });

    // For debugging
    this.init();
  }

  init() {
    if (this._init) return;

    this._viewportRange = helper.getViewportRange();

    this.pluginOptions.perPage = this.perPageConfig[this._viewportRange];

    this.$pagination.jPages(this.pluginOptions);

    this._init = true;
  }

  destroy() {
    if (this._init) {
      this.$pagination.jPages("destroy");
      this._init = false;
    }
  }

  // Preventing resetting containers after initialization

  // Items container
  get $container() {
    return this._$container;
  }
  set $container($container) {
    if (!this._$container) {
      this._$container = $container;
    }
  }

  // Pagination container
  get $pagination() {
    return this._$pagination;
  }
  set $pagination($container) {
    if (!this._$pagination) {
      this._$pagination = $container;
    }
  }

  // Breakpoints
  get breakpoints() {
    return this._breakpoints;
  }
  set breakpoints(breakpoints) {
    if (!this.breakpoints) {
      this._breakpoints = breakpoints;
    }
  }
}
