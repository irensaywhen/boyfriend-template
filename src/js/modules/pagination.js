import helper from "./helper.js";

export default class Pagination {
  constructor(config) {
    let selectors = config.selectors;
    this.options = config.options;

    this.$container = $(selectors.container);
    this.$pagination = $(selectors.pagination);
    this.breakpointsConfig = config.breakpoints;

    let breakpoints = Object.keys(config.breakpoints);
    this.breakpoints = breakpoints.map((breakpoint) => parseInt(breakpoint));

    this._init = false;

    $(window).resize(() => {
      let viewportWidth = helper.getViewportWidth();

      if (!this.breakpoints.includes(viewportWidth)) return;

      console.log("Came across bootstrap breakpoint!");
      console.log(this._init);

      if (!this._init) return;

      this.$pagination.destroy();
      this.$pagination.init();
    });
  }

  init() {
    if (!this._init) {
      this.$pagination.jPages(this.options);
      console.log("Initializing!");

      this.viewportWidth = helper.getViewportWidth();

      this._init = true;
    }
  }

  destroy() {
    if (this._init) {
      this.$pagination.jPages("destroy");
      this._init = false;
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

  get breakpoints() {
    return this._breakpoints;
  }
  set breakpoints(breakpoints) {
    if (!this.breakpoints) {
      this._breakpoints = breakpoints;
    }
  }
}
