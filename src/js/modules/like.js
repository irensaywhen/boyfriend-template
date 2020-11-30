import ServerRequest from './requests.js';

export default class Like extends ServerRequest {
  constructor(options) {
    super(options);

    const classes = options.classes,
      selectors = this.selectors;

    const { method, headers, endpoint } = this.requests.sendLike;

    // Caching
    this.heartWrapper = $(selectors.heartWrapper);
    this.heartEmpty = this.heartWrapper.find(selectors.heartEmpty);
    this.heartFull = this.heartWrapper.find(selectors.heartFull);

    // Toggle like
    const toggleLike = () => {
      this.heartEmpty.toggleClass(classes.likeEmpty);
      this.heartFull.toggleClass(classes.likeFull);
    };

    // Event listener
    this.heartWrapper.click(() => {
      toggleLike();

      this.makeRequest({ method, headers, endpoint }).then(response => {
        if (!response.success) {
          toggleLike();
        }
      });
    });
  }
}
