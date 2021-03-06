import swalAlert from './swalAlertMixin.js';
import loadingIndicatorMixin from './requestsIndictorMixin.js';

export default class ServerRequest {
  constructor(options) {
    // Bind context
    this._throwError = this._throwError.bind(this);

    // Save passed options
    let selectors = (this.selectors = options.selectors);
    this.requests = options.requests;
    this.errorText = options.errorText;

    this.popups = options.popups || null;

    // Transform endpoints into URL Objects
    this.makeURLObjects();

    Object.assign(ServerRequest.prototype, swalAlert);
    Object.assign(ServerRequest.prototype, loadingIndicatorMixin);

    /**
     * If selector for disabling buttons is not empty, disable buttons on request
     */
    if (selectors.disableButtonsOnRequest) {
      this.$disableButtonsOnRequest = $(selectors.disableButtonsOnRequest);
      $(this)
        .on('beforeRequest', () => {
          this.$disableButtonsOnRequest.attr('disabled', true);
        })
        .on('successfulRequest failedRequest', () => {
          this.$disableButtonsOnRequest.attr('disabled', false);
        });
    }
  }

  /**
   * Transform endpoints into URL objects
   */
  makeURLObjects() {
    for (let request in this.requests) {
      this.requests[request].endpoint = new URL(
        this.requests[request].endpoint
      );
    }
  }

  _throwError() {
    let error = new Error(response.statusText);
    error.name = response.status;
    throw error;
  }

  /**
   * Make server request with the passed headers, endpoint, method and body.
   * Function checks whether the method is GET and if so, sends request without body
   */
  makeRequest({ headers, endpoint, method, body }) {
    $(this).trigger('beforeRequest');
    if (method === 'GET') {
      return fetch(endpoint, {
        headers,
      })
        .then(response => {
          if (response.ok) {
            //debugger;
            return response.json();
          } else {
            this._throwError();
          }
        })
        .then(json => {
          // this === current Form here
          $(this).trigger('successfulRequest');
          return json;
        })
        .catch(error => {
          console.error(error);
          // Unsuccessful Popup
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: 'error',
          });
        });
    } else {
      // If method is not GET
      return fetch(endpoint, {
        method,
        headers,
        body,
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            this._throwError();
          }
        })
        .then(json => {
          // this === current Form here
          $(this).trigger('successfulRequest');
          return json;
        })
        .catch(error => {
          $(this).trigger('failedRequest');
          // Unsuccessful Popup
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: 'error',
          });
        });
    }
  }
}
