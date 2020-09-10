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
        let target = event.target,
          key = event.key,
          selection = window.getSelection().toString();

        switch (key) {
          case 'Backspace':
          case 'Tab':
            return;
        }

        if (selection !== '') return;

        let { restrictlength, maxlength } = target.dataset;
        // Check whether we need to restrict length
        if (!restrictlength) return;
        // Convert type to perform comparison
        maxlength = parseInt(maxlength);
        // If the field's value length is equals to max, prevent typing
        if (target.value.length === maxlength) event.preventDefault();
      });
    },

    hasTouchScreen() {
      let hasTouchScreen = false;

      if ('maxTouchPoints' in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
      } else if ('msMaxTouchPoints' in navigator) {
        hasTouchScreen = navigator.msMaxTouchPoints > 0;
      } else {
        var mQ = window.matchMedia && matchMedia('(pointer:coarse)');

        if (mQ && mQ.media === '(pointer:coarse)') {
          hasTouchScreen = !!mQ.matches;
        } else if ('orientation' in window) {
          // deprecated, but good fallback
          hasTouchScreen = true;
        } else {
          // Only as a last resort, fall back to user agent sniffing
          var UA = navigator.userAgent;
          hasTouchScreen =
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        }
      }

      return hasTouchScreen;
    },

    hasWebCamera() {
      let hasWebCam, supportMediaDevices;

      // Check properties support in the browser
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        return { supportMediaDevices: false };
      } else {
        supportMediaDevices = true;
      }

      return navigator.mediaDevices
        .enumerateDevices()
        .then(function (devices) {
          hasWebCam = devices.some(device => device.kind === 'videoinput');
          return { supportMediaDevices, hasWebCam };
        })
        .catch(function (err) {
          console.log(err.name + ': ' + err.message);
        });
    },

    async isShowCameraCapturing() {
      let hasTouchScreen = this.hasTouchScreen(),
        { supportMediaDevices, hasWebCam } = await this.hasWebCamera();

      if (!supportMediaDevices) {
        // If navigator.mediaDevices property is not supported
        return true;
      } else if (hasTouchScreen && hasWebCam) {
        // If navigator.mediaDevices property is supported
        // and the device has touch screen and web camera
        return true;
      } else {
        return false;
      }
    },
  };
})();
