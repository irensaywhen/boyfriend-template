import ServerRequest from './requests.js';

export default class Chat extends ServerRequest {
  constructor(options) {
    super(options);

    this._setUpEventListeners();
  }

  _setUpEventListeners() {
    let $document = $(document);

    $document.click(event => {
      //event.preventDefault();
      //
      //let target = event.target;
      //if($(target).hasClass())
    });
  }
}
