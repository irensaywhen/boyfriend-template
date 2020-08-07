import helper from "./helper.js";

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
      console.log(`Pagination is initialized: ${this._init}`);

      // Do it after ads insertion
      //this.init();
    });

    let $document = $(document);

    $document.on("searchForm:beforeRequest", () => {
      this.$container.empty();
      this.destroy();
    });

    $document.on("ad:afterInsert", () => {
      console.log("ad:afterInsert");
      this.init();
    });
  }

  init() {
    if (this._init) return;
    console.log("Initializing pagination!");

    this.$pagination.trigger("pagination:beforeInit");

    this._viewportRange = helper.getViewportRange();
    this.pluginOptions.perPage = this.perPageConfig[this._viewportRange];

    this.$pagination.jPages(this.pluginOptions);

    this.$pagination.trigger("pagination:afterInit");

    this._init = true;
  }

  destroy() {
    if (this._init) {
      this.$pagination.jPages("destroy");

      this.$pagination.trigger("pagination:afterDestroy");

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
