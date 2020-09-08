import Form from './form.js';
import helper from './helper.js';

export default class SearchProfilesForm extends Form {
  constructor(options) {
    super(options);

    //Binding context
    this._generateAgeRange = this._generateAgeRange.bind(this);
    this._initializeSlider = this._initializeSlider.bind(this);
    this._createProfileView = this._createProfileView.bind(this);
    this._createProfileViews = this._createProfileViews.bind(this);
    this._createNoResultsBadge = this._createNoResultsBadge.bind(this);
    this._getProfiles = this._getProfiles.bind(this);

    this.searchFormOptions = options['searchFormOptions'];
    this.$resultsContainer = $(this.selectors['resultsContainer']);

    this.slider = options['slider'];

    this._generateAgeRange();
    this._initializeSlider();
  }

  _initializeSlider() {
    this.slider['noUiSlider'].on('change', () => {
      this.$inputs.first().trigger('input');
    });
  }

  cacheElements() {
    super.cacheElements();

    this.$formLoadingIndicator = $(
      this.selectors['formLoadingIndicator']
    ).fadeOut(0);
  }

  setUpEventListeners() {
    super.setUpEventListeners();

    this.$form.on('input', event => {
      // Listen to input to retrieve profiles
      let target = event.target;

      if (target.name === 'city') return;
      // Indicate that the input has finished
      this.$form.trigger('inputFinished');
    });

    // Handle the case when the city has been selected
    this.$locationInput.on('citySelected', () => {
      this.$form.trigger('inputFinished');
    });

    // Retrieve new profiles when input has been finished
    this.$form.on('inputFinished', event => {
      // Show loading indicator
      this.$formLoadingIndicator.fadeIn(200);
      // Save inputed information
      this.collectFormInputs();

      // Trigger hook
      this.$form.trigger('searchForm:beforeRequest');
      // Get profiles from the server
      this._getProfiles('search');
      // Hide loading indicator
      this.$formLoadingIndicator.fadeOut(200);
    });

    $(document).ready(() => {
      this._getProfiles('initial');
      // Make request to retrieve initial profiles here
      // And show preloaded profiles before anything from the form is retrieved
    });
  }

  /**
   * Function handling getting profiles from the server
   * @param {String} requestType - indicator whether we need to retrieve profiles
   * based on the search or preload profiles when the user enter the page
   */
  _getProfiles(requestType) {
    let request =
      requestType === 'initial'
        ? this.requests.preload
        : this.requests.profiles;

    this.makeRequest({
      method: request.method,
      headers: request.headers,
      endpoint: request.endpoint,
      body: JSON.stringify(this.formData),
    })
      .then(response => {
        if (response.success) {
          // Cache
          let profiles = response.profiles;
          // Preview retrieved profiles
          this._createProfileViews(profiles);

          this.$form.trigger('searchForm:afterSuccessfulRequest', response);
        } else {
          this._createNoResultsBadge(response);
        }
      })
      .catch(error => {
        this.showRequestResult({
          title: error.name,
          text: error.message,
          icon: 'error',
        });
      });
  }

  _createProfileViews(profiles) {
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
    $('html, body').animate(
      {
        scrollTop:
          this.$resultsContainer.offset().top - 2 * helper.getHeaderHeight(),
      },
      1100
    );
    profiles.forEach(profile => {
      this._createProfileView(profile).appendTo(this.$resultsContainer);
    });
  }

  _generateAgeRange() {
    // Cache range
    let ageFrom = this.searchFormOptions.ageFrom;
    let ageTo = this.searchFormOptions.ageTo;

    let $ageInputs = this.$form.find(this.selectors.age);

    for (let i = ageFrom; i <= ageTo; i++) {
      $('<option></option>').attr('value', i).text(i).appendTo($ageInputs);
    }
  }

  _createProfileView(profileParameters) {
    let { premium, online, avatar, profile } = profileParameters;

    let $col = $('<div></div>')
      .addClass('col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2')
      .addClass('column mx-auto mx-sm-0 search-result');

    let $profileContainer = $('<div></div>').addClass(
      'card shadow-sm border-0 mb-4'
    );

    let $cardImage = $('<figure></figure>')
      .addClass('profile-image card-img-top')
      .append(
        $('<img>')
          .addClass('card-img-top')
          .attr('src', avatar.src)
          .attr('alt', avatar.alt)
      );

    if (premium.status) {
      $cardImage.addClass('premium').append(
        $('<span></span>')
          .addClass('badge badge-primary mb-1')
          .text(premium.text || 'Premium')
      );
    }

    let $cardBody = $('<div></div>').addClass('card-body');

    let $userName = $('<h3></h3>')
      .addClass('mb-0')
      .append(
        $('<a></a>')
          .addClass(
            'text-dark mb-1 mt-2 mr-2 h6 d-inline-block text-capitalize'
          )
          .attr('href', profile.url)
          .text(profile.name)
      );

    if (online.status) {
      $userName.addClass('name online').append(
        $('<span></span>')
          .addClass('badge badge-success mb-1 small')
          .text(online.text || 'online')
      );
    }

    let $city = $('<p>')
      .addClass('text-secondary small mb-2')
      .text(profile.city);

    $cardBody.append($userName).append($city);

    let $cardFooter = $('<div></div>')
      .addClass('card-footer')
      .append(
        $('<div></div>')
          .addClass('text-center mt-2')
          .append(
            $('<a></a>')
              .addClass('btn btn-default')
              .attr('href', profile.url)
              .text(profile.buttonText)
          )
      );

    // Everything together
    return $col.append(
      $profileContainer.append($cardImage).append($cardBody).append($cardFooter)
    );
  }

  _createNoResultsBadge(content) {
    let { title, message } = content;

    $('<div></div>')
      .addClass('col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3')
      .append(
        $('<div></div>')
          .addClass(
            'no-results shadow-sm bg-white rounded text-center px-3 py-5'
          )
          .append($('<i></i>').addClass('fas fa-heart-broken'))
          .append($('<h2></h2>').addClass('title').text(title))
          .append($('<p></p>').addClass('text-secondary').text(message))
      )
      .css('opacity', '0')
      .appendTo(this.$resultsContainer)
      .animate(
        {
          opacity: 1,
        },
        800
      );
    $('html, body').animate(
      {
        scrollTop:
          this.$resultsContainer.offset().top - helper.getHeaderHeight(),
      },
      1100
    );
  }
}
