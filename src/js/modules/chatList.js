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

    // Sort messages based on timestamp
    messages.sort((firstMessage, secondMessage) => {
      firstMessage.timestamp < secondMessage.timestamp
        ? 1
        : firstMessage.timestamp > secondMessage.timestamp
        ? -1
        : 0;
    });
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
      let $messageContainer = $("<div></div>").addClass(
        "message border-bottom mx-1 mx-sm-4 d-flex align-items-center py-3"
      );

      let $name = $("<h3></h3>")
        .addClass("name")
        .append($("<span></span>").text(message["userName"]));

      if (message["unread"]) {
        // Username with badge
        $name.append(
          $("<span></span>")
            .addClass("badge badge-info ml-2")
            .text(message["amount"])
        );

        $messageContainer.addClass("unread");
      }

      // Building the entire message
      $messageContainer
        .append(
          $("<figure></figure>")
            .addClass("avatar")
            .append($("<img>").attr("src", message["avatar"]).attr("alt", ""))
        )
        .append(
          $("<div></div>")
            .addClass("pl-1 pl-sm-3 w-100")
            .append(
              $("<div></div>")
                .addClass("d-flex justify-content-between")
                .append($name)
                .append(
                  $("<time></time>")
                    .addClass("date small text-secondary")
                    .text(message["timestamp"])
                )
            )
            .append(
              $("<p></p>").addClass("text text-secondary").text(message["text"])
            )
        )
        .appendTo(this.$chatList);
    });
  }
}
