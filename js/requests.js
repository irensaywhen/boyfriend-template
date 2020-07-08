class ServerRequest {
  constructor() {
    // Bind context
    this.sendPhotoInformationToServer = this.sendPhotoInformationToServer.bind(
      this
    );
    this.deletePhotoOnServer = this.deletePhotoOnServer.bind(this);
  }

  deletePhotoOnServer({ id, headers, endpoint, method }) {
    return fetch(endpoint, {
      method: method,
      headers: headers,
      body: JSON.stringify({ id }),
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

  sendPhotoInformationToServer({
    id,
    privacy,
    description,
    headers,
    endpoint,
    method,
  }) {
    return fetch(endpoint, {
      method: method,
      headers: headers,
      body: JSON.stringify({ id, privacy, description }),
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
}
