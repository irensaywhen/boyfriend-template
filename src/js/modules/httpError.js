export default class HttpError extends Error {
  constructor(name, message, headers) {
    super(name, message);

    this.status = name;
    this.statusText = message;
    this.headers = headers;
  }
}
