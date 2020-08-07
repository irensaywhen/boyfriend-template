import Form from "./form.js";
import Pagination from "./pagination.js";

export default class SearchProfilesForm extends Form {
  constructor(options) {
    super(options);

    //Binding context
    this.generateAgeRange = this.generateAgeRange.bind(this);
    this.initializeSlider = this.initializeSlider.bind(this);
    this.createProfileView = this.createProfileView.bind(this);
    this.createProfileViews = this.createProfileViews.bind(this);
    this.createNoResultsBadge = this.createNoResultsBadge.bind(this);

    this.searchFormOptions = options["searchFormOptions"];
    this.$resultsContainer = $(this.selectors["resultsContainer"]);

    this.slider = options["slider"];

    this.generateAgeRange();
    this.initializeSlider();
  }

  initializeSlider() {
    // THink whether you need to save it
    //this.$distanceFrom = this.$form.find(this.selectors["distanceFrom"]);
    //this.$distanceTo = this.$form.find(this.selectors["distanceTo"]);

    this.slider["noUiSlider"].on("change", () => {
      this.$inputs.first().trigger("input");
    });
  }

  cacheElements() {
    super.cacheElements();

    this.$formLoadingIndicator = $(
      this.selectors["formLoadingIndicator"]
    ).fadeOut(0);
  }

  setUpEventListeners() {
    super.setUpEventListeners();

    this.$form.on("input", (event) => {
      let target = event.target;

      if (target.name === "city") return;
      this.$form.trigger("inputFinished");
    });

    this.$locationInput.on("citySelected", () => {
      this.$form.trigger("inputFinished");
    });

    this.$form.on("inputFinished", (event) => {
      // Show loading indicator
      this.$formLoadingIndicator.fadeIn(200);

      this.collectFormInputs();

      let request = this.requests.profiles;

      this.makeRequest({
        method: request.method,
        headers: request.headers,
        endpoint: request.endpoint,
        body: JSON.stringify(this.formData),
      }).then((response) => {
        if (!response.success) {
          this.createNoResultsBadge(response);

          this.$formLoadingIndicator.fadeOut(200);
          return;
        }

        let profiles = response.profiles;

        this.createProfileViews(profiles);

        this.$form.trigger("searchForm:afterSuccessfulRequest", response);

        // Hide loading indicator
        this.$formLoadingIndicator.fadeOut(200);
      });
    });
  }

  createProfileViews(profiles) {
    // Sort out all the premium users to be at the beginning
    profiles.sort((user1, user2) => {
      return user1.premium.status
        ? user1.online.status
          ? user2.premium.status
            ? user2.online.status
              ? 0
              : -1
            : -1
          : user2.premium.status
          ? user2.online.status
            ? 1
            : 0
          : -1
        : user2.premium.status
        ? 1
        : user1.online.status
        ? user2.online.status
          ? 0
          : -1
        : user2.online.status
        ? 1
        : 0;
    });
    //$("html, body").animate(
    //  {
    //    scrollTop: this.pagination.$container.offset().top,
    //  },
    //  1100
    //);
    profiles.forEach((profile) => {
      this.createProfileView(profile).appendTo(this.$resultsContainer);
    });
  }

  generateAgeRange() {
    // Cache range
    let ageFrom = this.searchFormOptions.ageFrom;
    let ageTo = this.searchFormOptions.ageTo;

    let $ageInputs = this.$form.find(this.selectors.age);

    for (let i = ageFrom; i <= ageTo; i++) {
      $("<option></option>").attr("value", i).text(i).appendTo($ageInputs);
    }
  }

  createProfileView(profileParameters) {
    let { premium, online, avatar, profile } = profileParameters;

    let $col = $("<div></div>")
      .addClass("col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2")
      .addClass("column mx-auto mx-sm-0 search-result");

    let $profileContainer = $("<div></div>").addClass(
      "card shadow-sm border-0 mb-4"
    );

    let $cardImage = $("<figure></figure>")
      .addClass("profile-image card-img-top")
      .append(
        $("<img>")
          .addClass("card-img-top")
          .attr("src", avatar.src)
          .attr("alt", avatar.alt)
      );

    if (premium.status) {
      $cardImage.addClass("premium").append(
        $("<span></span>")
          .addClass("badge badge-primary mb-1")
          .text(premium.text || "Premium")
      );
    }

    let $cardBody = $("<div></div>").addClass("card-body");

    let $userName = $("<h3></h3>")
      .addClass("mb-0")
      .append(
        $("<a></a>")
          .addClass(
            "text-dark mb-1 mt-2 mr-2 h6 d-inline-block text-capitalize"
          )
          .attr("href", profile.url)
          .text(profile.name)
      );

    if (online.status) {
      $userName.addClass("name online").append(
        $("<span></span>")
          .addClass("badge badge-success mb-1 small")
          .text(online.text || "online")
      );
    }

    let $city = $("<p>")
      .addClass("text-secondary small mb-2")
      .text(profile.city);

    $cardBody.append($userName).append($city);

    let $cardFooter = $("<div></div>")
      .addClass("card-footer")
      .append(
        $("<div></div>")
          .addClass("text-center mt-2")
          .append(
            $("<a></a>")
              .addClass("btn btn-default")
              .attr("href", profile.url)
              .text(profile.buttonText)
          )
      );

    // Everything together
    return $col.append(
      $profileContainer.append($cardImage).append($cardBody).append($cardFooter)
    );
  }

  createNoResultsBadge(content) {
    let { title, message } = content;

    $("<div></div>")
      .addClass("col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3")
      .append(
        $("<div></div>")
          .addClass(
            "no-results shadow-sm bg-white rounded text-center px-3 py-5"
          )
          .append($("<i></i>").addClass("fas fa-heart-broken"))
          .append($("<h2></h2>").addClass("title").text(title))
          .append($("<p></p>").addClass("text-secondary").text(message))
      )
      .css("opacity", "0")
      .appendTo(this.pagination.$container)
      .animate(
        {
          opacity: 1,
        },
        800
      );
    $("html, body").animate(
      {
        scrollTop: this.pagination.$container.offset().top,
      },
      1100
    );
  }
}
