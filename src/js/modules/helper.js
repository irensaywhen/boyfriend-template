export default (function () {
  // Private variables and functions
  const breakpoints = [320, 576, 768, 992, 1200];

  return {
    // Public variables and functions
    getScrollBarWidth() {
      var $outer = $('<div>')
          .css({ visibility: 'hidden', width: 100, overflow: 'scroll' })
          .appendTo('body'),
        widthWithScroll = $('<div>')
          .css({ width: '100%' })
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
        return 'xs';
      } else if (
        breakpoints[1] <= viewportWidth &&
        viewportWidth < breakpoints[2]
      ) {
        return 'sm';
      } else if (
        breakpoints[2] <= viewportWidth &&
        viewportWidth < breakpoints[3]
      ) {
        return 'md';
      } else if (
        breakpoints[3] <= viewportWidth &&
        viewportWidth < breakpoints[4]
      ) {
        return 'lg';
      } else if (breakpoints[4] <= viewportWidth) {
        return 'xl';
      }
    },

    getHeaderHeight(headerSelector = '.private-header') {
      return $(headerSelector).outerHeight();
    },

    restrictInputLength($form) {
      $form.on('keydown', event => {
        // Cache target
        let target = event.target;
        // Cache custom attributes
        let { restrictlength, maxlength } = target.dataset;
        // Check whether we need to restrict length
        if (!restrictlength) return;
        // Convert type to perform comparison
        maxlength = parseInt(maxlength);
        // If the field's value length is equals to max, prevent typing
        if (target.value.length === maxlength) event.preventDefault();
      });
    },
  };
})();
