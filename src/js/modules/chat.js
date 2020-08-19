import ServerRequest from './requests.js';
import Handlebars from 'handlebars';

export default class Chat extends ServerRequest {
  constructor(options) {
    super(options);

    this.debug = options.debug || false;

    if (!this.debug) this.selectors = options.selectors;

    this.testData = {
      type: 'general',
      mine: false,
      text: 'Testing templating',
      time: '13:55',
      id: 123,
      seen: true,
    };

    // Save class names
    this.classNames = options.classNames;

    // Save templates selectors
    this.messageTemplates = options.messageTemplateIds;

    this._cacheElements();
    this._setUpEventListeners();

    // Save all the templates to render them in the future
    this._prepareTemplates();

    // Testing handlebars templates
    //const template = Handlebars.compile('Name: {{name}}');
    //console.log(template({ name: 'Nils' }));

    // Render template with test data
    // And append it to the messages container
    //let compiled = Handlebars.compile(
    //  this.messageTemplates[this.testData.type]
    //);
    //this.$messagesContainer.append(compiled(this.testData));

    this._displayMessage(this.testData);
  }

  _cacheElements() {
    let selectors = this.selectors;

    this.$chat = $(selectors.chat);
    this.$messagesContainer = this.$chat.find(selectors.messagesContainer);
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

  _prepareTemplates() {
    let templates = this.messageTemplates;

    for (let id in templates) {
      // Save templates instead of its ids as document fragments
      //templates[id] = document
      //  .getElementById('message-template')
      //  .content.cloneNode(true);
      // Save templates instead of its ids as HTML
      templates[id] = document.getElementById('message-template').innerHTML;
    }
  }

  _getMessageText() {
    return this.$sendMessageTextarea.val();
  }

  _displayMessage(data) {
    // Prepare template for compilation
    let compiled = Handlebars.compile(this.messageTemplates[data.type]);

    // Compile template with passed data
    compiled = compiled(data);

    // Append template to the message container
    this.$messagesContainer.append(compiled);
  }

  _changeMessageStatus() {}
}
