export default class HttpError extends Error {
  constructor(message, response) {
    super(message);

    this.name = 'HttpError';

    // Save error information
    let { status, statusText, headers } = response;

    this.status = status;
    this.statusText = statusText;
    this.headers = headers;
  }
}
