export default (function () {
  const breakpoints = [320, 576, 768, 992, 1200];

  return {
    getScrollBarWidth() {
      var $outer = $("<div>")
          .css({ visibility: "hidden", width: 100, overflow: "scroll" })
          .appendTo("body"),
        widthWithScroll = $("<div>")
          .css({ width: "100%" })
          .appendTo($outer)
          .outerWidth();
      $outer.remove();
      return 100 - widthWithScroll;
    },

    getViewportWidth() {
      return $(window).width() + this.getScrollBarWidth();
    },

    getViewportRange() {
      let viewportWidth = this.getViewportWidth();

      if (viewportWidth && viewportWidth < breakpoints[1]) {
        return "xs";
      } else if (
        breakpoints[1] <= viewportWidth &&
        viewportWidth < breakpoints[2]
      ) {
        return "sm";
      } else if (
        breakpoints[2] <= viewportWidth &&
        viewportWidth < breakpoints[3]
      ) {
        return "md";
      } else if (
        breakpoints[3] <= viewportWidth &&
        viewportWidth < breakpoints[4]
      ) {
        return "lg";
      } else if (breakpoints[4] <= viewportWidth) {
        return "xl";
      }
    },
  };
})();
