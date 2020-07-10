export default class ServerRequest {
  constructor(options) {
    // Bind context
    this.sendPhotoInformationToServer = this.sendPhotoInformationToServer.bind(
      this
    );
    this.deletePhotoOnServer = this.deletePhotoOnServer.bind(this);

    // Save passed options
    this.selectors = options.selectors;
    this.requests = options.requests;

    // Transform endpoints into URL Objects
    this.makeURLObjects();
  }

  makeURLObjects() {
    for (let request in this.requests) {
      this.requests[request].endpoint = new URL(
        this.requests[request].endpoint
      );
    }
  }

  makeRequest({ headers, endpoint, method, body }) {
    return fetch(endpoint, {
      method,
      headers,
      body,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // Add popup here
          alert("Something went wrong");
        }
      })
      .then((json) => {
        return json;
      })
      .catch((error) => {
        // Add popup here
        alert("Error!");
      });
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
}
