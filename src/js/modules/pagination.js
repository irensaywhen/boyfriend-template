import helper from "./helper.js";

export default class Pagination {
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

      if (viewportRange === this._viewportRange && this._init) return;
      console.log("Destroying pagination on resize...");
      this.destroy({ resized: true });
      this.init();
      console.log(`Pagination is initialized: ${this._init}`);
    });

    let $document = $(document);

    $document.on("searchForm:beforeRequest", () => {
      console.log("searchForm:beforeRequest");
      this.$container.empty();
      this.destroy({ resized: false });
    });

    $document.on("searchForm:afterSuccessfulRequest", (event, data) => {
      this.init(data);
    });

    //$document.on("ad:afterInsert", () => {
    //  console.log("ad:afterInsert");
    //  this.init();
    //});
  }

  init(data) {
    console.log("Entered init function...");
    console.log(this._init);
    if (this._init) return;
    console.log("Initializing pagination!");

    this.$pagination.trigger("pagination:beforeInit", data);

    this._viewportRange = helper.getViewportRange();
    console.log(`Current viewportRange is ${this._viewportRange}`);
    this.pluginOptions["perPage"] = this.perPageConfig[this._viewportRange];

    this.$pagination.jPages(this.pluginOptions);

    this.$pagination.trigger("pagination:afterInit");

    this._init = true;
  }

  destroy(options) {
    if (this._init) {
      // Save passed parameters
      let { resized } = options;

      if (resized) {
        // Trigger event if the destroyment was initiated due to resizement
        this.$pagination.trigger("pagination:beforeDestroyAfterResize");
      }

      this.$pagination.jPages("destroy");
      this._init = false;

      if (resized) {
        // Trigger event if the destroyment was initiated due to resizement
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
