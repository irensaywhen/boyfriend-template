import ServerRequest from "./requests.js";
import location from "./locationMixin.js";

export default class Form extends ServerRequest {
  constructor(options) {
    super(options);
  }

  cacheElements() {}

  setUpEventListeners() {}
}
