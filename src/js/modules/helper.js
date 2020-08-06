export default (function () {
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
  };
})();
