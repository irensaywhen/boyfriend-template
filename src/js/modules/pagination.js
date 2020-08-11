import helper from "./helper.js";

export default class Pagination {
  _profilesShown = false;

  constructor(config) {
    let selectors = config.selectors;

    this.$container = $(selectors.container);
    this.$pagination = $(selectors.pagination);

    // Options for the plugin
    this.pluginOptions = config["pluginOptions"];

    // Configuration for breakpoints
    this.perPageConfig = config["perPageConfig"];

    this._init = false;

    $(window).resize(() => {
      let viewportRange = helper.getViewportRange();

      // If there is no any profiles yet
      if (!this._profilesShown) return;

      if (viewportRange === this._viewportRange && this._init) return;

      // Indicate that destroyment was caused by resize
      this.destroy({ resized: true });

      this.init();
    });

    let $document = $(document);

    $document.on("searchForm:beforeRequest", () => {
      // Delete previous results
      this.$container.empty();

      // Indicate that destroyment wasn't caused by resize
      this.destroy({ resized: false });
    });

    $document.on("searchForm:afterSuccessfulRequest", (event, data) => {
      this._profilesShown = true;
      this.init(data);
    });
  }

  init(data) {
    // Do not initialize pagination if it is already initiated
    if (this._init) return;

    this.$pagination.trigger("pagination:beforeInit", data);

    // Save current viewport range
    this._viewportRange = helper.getViewportRange();

    // Pass current viewport range to plugin options
    this.pluginOptions["perPage"] = this.perPageConfig[this._viewportRange];

    // Initiate plugin
    this.$pagination.jPages(this.pluginOptions);

    this.$pagination.trigger("pagination:afterInit");

    this._init = true;
  }

  destroy(options) {
    if (this._init) {
      // Save passed parameters
      let { resized } = options;

      if (resized) {
        // Trigger event if the destroyment was initiated by resizement
        this.$pagination.trigger("pagination:beforeDestroyAfterResize");
      }

      // destroy plugin instance
      this.$pagination.jPages("destroy");
      this._init = false;

      if (resized) {
        // Trigger event if the destroyment was initiated by resizement
        this.$pagination.trigger("pagination:afterDestroyAfterResize");
      }
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
