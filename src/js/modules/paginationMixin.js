export default {
  init(options) {
    _cacheElements.call(this);
    _setUpEventListeners.call(this);

    config = options;
  },
};

// Private variables
let config, container;

/**Private methods */

function _cacheElements() {}

function _setUpEventListeners() {}

// Maybe there will be no need in this file
