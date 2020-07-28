import ServerRequest from "./requests.js";

export default class ChatList extends ServerRequest {
  get observerOptions() {
    return this._observerOptions;
  }
  set observerOptions(options) {
    if (!this._observerOptions) {
      this._observerOptions = options;
    } else {
      return;
    }
  }

  constructor(options) {
    super(options);

    // Binding context
    this.observeLastMessage = this.observeLastMessage.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.showNewMessages = this.showNewMessages.bind(this);
    this.displayMessages = this.displayMessages.bind(this);

    // Set amount of messages for the request
    this.requests.messages.endpoint.searchParams.set(
      "amount",
      String(options.messagesAmount)
    );

    // Initialization call to the functions
    this.cacheElements();
    this.setUpEventListeners();
    this.observeLastMessage();
  }
  cacheElements() {
    this.$chatList = $(this.selectors.chatList);
    console.log(this.$chatList);

    // Messages
    this.$messages = this.$chatList.find(this.selectors.message);
    this.lastMessage = this.$messages.last()[0];

    // Set observer options
    this.observerOptions = {
      root: this.$chatList[0],
      rootMargin: "0px",
      threshold: 0,
    };
  }

  setUpEventListeners() {
    let chatList = document.getElementById("chat-list");

    chatList.addEventListener(
      "scroll",
      (event) => {
        let target = event.target;
      },
      { passive: true }
    );
  }

  observeLastMessage() {
    this.observer =
      this.observer ||
      new IntersectionObserver((entries, observer) => {
        // Save the last message
        let element = entries[0];
        if (!element.isIntersecting) return;

        setTimeout(this.showNewMessages, 0);
      });

    this.observer.observe(this.lastMessage);
  }

  async showNewMessages() {
    let messages = await this.getMessages();
    console.log(messages);
    this.displayMessages(messages);
  }

  async getMessages() {
    let request = this.requests.messages;

    return await this.makeRequest({
      headers: request.headers,
      endpoint: request.endpoint,
      method: request.method,
    });
  }

  displayMessages(messages) {
    messages.forEach((message) => {
      //let $message = $("<div></div>")
      //  .addClass(
      //    "message new border-bottom mx-1 mx-sm-4 d-flex align-items-center py-3"
      //  )
      //  // Avatar
      //  .append(
      //    $("<figure></figure>")
      //      .addClass("avatar")
      //      .append($("<img>").attr("src", message.src).attr("alt", ""))
      //  )
      //  .append(
      //    $("<div></div>")
      //      .addClass("pl-1 pl-sm-3")
      //      // Name and date
      //      .append(
      //        $("<div></div>")
      //          .addClass("d-flex justify-content-between")
      //          .append(
      //            $("<h3></h3>")
      //              .addClass("name")
      //              .append($("<span></span>").text(message.name))
      //
      //          )
      //      )
      //  );
    });
  }
}
