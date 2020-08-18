import ServerRequest from './requests.js';

export default class Chat extends ServerRequest {
  constructor(options) {
    super(options);

    this.debug = options.debug || false;

    if (!this.debug) this.selectors = options.selectors;

    // Save class names
    this.classNames = options.classNames;

    // Save templates selectors
    this.templates = options.templates;
    console.log(this.templates);

    this._cacheElements();
    this._setUpEventListeners();
  }

  _cacheElements() {
    let selectors = this.selectors;

    this.$chat = $(selectors.chat);
    this.$sendButton = this.$chat.find(selectors.sendButton).fadeOut(0);
    this.$sendMessageForm = this.$chat.find(selectors.sendMessageForm);
    this.$sendMessageTextarea = this.$chat.find(selectors.message);
  }

  _setUpEventListeners() {
    let $document = $(document);
    let classNames = this.classNames;

    this.$chat.on('input', event => {
      let $target = $(event.target);

      if (!$target.hasClass(classNames.message)) return;

      $target.val() ? this.$sendButton.fadeIn() : this.$sendButton.fadeOut(300);
    });

    this.$sendMessageForm.submit(event => {
      event.preventDefault();

      let messageText = this._getMessageText();
    });
  }

  _getMessageText() {
    return this.$sendMessageTextarea.val();
  }

  _displayMessage(data, type) {}

  _displayGeneralMessage() {}

  _changeMessageStatus() {}
}
