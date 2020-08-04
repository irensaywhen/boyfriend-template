import Form from "./form.js";

export default class SearchProfilesForm extends Form {
  constructor(options) {
    super(options);

    //Binding context
    this.generateAgeRange = this.generateAgeRange.bind(this);
    this.initializeSlider = this.initializeSlider.bind(this);
    this.showProfile = this.showProfile.bind(this);

    this.searchFormOptions = options.searchFormOptions;

    this.slider = options.slider;

    this.generateAgeRange();
    this.initializeSlider();
  }

  cacheElements() {
    super.cacheElements();

    this.$formLoadingIndicator = $(
      this.selectors["formLoadingIndicator"]
    ).fadeOut(0);

    this.$profilesContainer = $(this.selectors["profilesContainer"]);

    let profileExample = {
      premium: {
        status: true,
        text: "Premium",
      },
      online: {
        status: true,
        text: "online",
      },
      avatar: {
        src: "img/photo2.jpg",
        alt: "Avatar photo",
      },
      profile: {
        url: "profile.html",
        buttonText: "View Profile",
        city: "Krakow",
        name: "david, 27",
      },
    };

    let $profile = this.showProfile(profileExample);

    this.$profilesContainer.append($profile);
  }

  setUpEventListeners() {
    super.setUpEventListeners();

    this.$form.on("input", (event) => {
      let target = event.target;

      if (target.name === "city") return;
      console.log("Inputed!");

      //console.log("Inputed");

      this.collectFormInputs();
      console.log(this.formData);
    });

    this.$locationInput.on("citySelected", () => {
      console.log("City selected");
      this.collectFormInputs();
      console.log(this.formData);
    });
  }

  initializeSlider() {
    // THink whether you need to save it
    this.$distanceFrom = this.$form.find(this.selectors["distanceFrom"]);
    this.$distanceTo = this.$form.find(this.selectors["distanceTo"]);

    this.slider["noUiSlider"].on("end", () => {
      this.$inputs.first().trigger("input");
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

  showProfile(profileParameters) {
    let { premium, online, avatar, profile } = profileParameters;

    let $col = $("<div></div>")
      .addClass("col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2")
      .addClass("column mx-auto mx-sm-0");

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
      let $badge = $("<span></span>")
        .addClass("badge badge-primary mb-1")
        .text(premium.text || "Premium")
        .appendTo($cardImage);
    }

    let $cardBody = $("<div></div>").addClass("card-body");

    let $userName = $("<h3></h3>")
      .addClass("mb-0 name online")
      .append(
        $("<a></a>")
          .addClass(
            "text-dark mb-1 mt-2 mr-2 h6 d-inline-block text-capitalize"
          )
          .attr("href", profile.url)
          .text(profile.name)
      );

    if (online.status) {
      let $badge = $("<span></span>")
        .addClass("badge badge-success mb-1 small")
        .text(online.text || "online")
        .appendTo($userName);
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
}
