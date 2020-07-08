class ServerRequest {
  constructor() {}

  deletePhoto({ id, headers, endpoint, method }) {
    return fetch(endpoint, {
      method: method,
      headers: headers,
      body: { id },
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
