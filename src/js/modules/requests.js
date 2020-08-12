import swalAlert from "./swalAlertMixin.js";

export default class ServerRequest {
  constructor(options) {
    // Bind context
    this.sendPhotoInformationToServer = this.sendPhotoInformationToServer.bind(
      this
    );
    this.deletePhotoOnServer = this.deletePhotoOnServer.bind(this);
    this.getPhotosIds = this.getPhotosIds.bind(this);
    this.requestBonusUsage = this.requestBonusUsage.bind(this);

    // Save passed options
    this.selectors = options["selectors"];
    this.requests = options["requests"];

    // Transform endpoints into URL Objects
    this.makeURLObjects();

    Object.assign(ServerRequest.prototype, swalAlert);
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

  /**
   * Make server request with the passed headers, endpoint, method and body.
   * Function checks whether the method is GET and if so, sends request without body
   */
  makeRequest({ headers, endpoint, method, body }) {
    if (method === "GET") {
      return fetch(endpoint, {
        headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            // Unsuccessful Popup
            this.showRequestResult({
              title: response.status,
              text: response.statusText,
              icon: "error",
            });
          }
        })
        .then((json) => {
          return json;
        })
        .catch((error) => {
          // Unsuccessful Popup
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: "error",
          });
        });
    } else {
      // If method is not GET
      return fetch(endpoint, {
        method,
        headers,
        body,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            // Unsuccessful Popup
            this.showRequestResult({
              title: response.status,
              text: response.statusText,
              icon: "error",
            });
          }
        })
        .then((json) => {
          return json;
        })
        .catch((error) => {
          // Unsuccessful Popup
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: "error",
          });
        });
    }
  }

  async deletePhotoOnServer({ id, headers, endpoint, method }) {
    return await this.makeRequest({
      headers,
      endpoint,
      method,
      body: JSON.stringify({ id }),
    });
  }

  async sendPhotoInformationToServer({
    id,
    privacy,
    description,
    headers,
    endpoint,
    method,
  }) {
    return await this.makeRequest({
      headers,
      endpoint,
      method,
      body: JSON.stringify({ id, privacy, description }),
    });
  }

  async getPhotosIds({ filesAmount, headers, endpoint, method }) {
    // Add amount of files as a query parameter
    this.requests.getIds.endpoint.searchParams.set(
      "amount",
      String(filesAmount)
    );

    return await this.makeRequest({
      headers,
      endpoint,
      method,
    });
  }

  async getPrice({ headers, endpoint, method }) {
    for (let name in this.formData) {
      endpoint.searchParams.set(name, this.formData[name]);
    }

    return await this.makeRequest({ headers, endpoint, method });
  }

  requestBonusUsage({ headers, endpoint, method, body }) {
    return fetch(endpoint, {
      method,
      headers,
      body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        Swal.showValidationMessage(`Request failed: ${error}`);
      });
  }
}
