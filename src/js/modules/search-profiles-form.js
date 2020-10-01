import Form from './form.js';
import helper from './helper.js';

export default class SearchProfilesForm extends Form {
  constructor(options) {
    super(options);

    this.$resultsContainer = $(this.selectors['resultsContainer']);

    /**
     * Generate age range:
     * 1. Get the initial and final range from the options
     * 2. Generate <option> element in age selection element
     */
    let { ageFrom, ageTo } = options.searchFormOptions;
    let $ageInputs = this.$form.find(this.selectors.age);

    for (let i = ageFrom; i <= ageTo; i++) {
      $('<option></option>').attr('value', i).text(i).appendTo($ageInputs);
    }

    // Initialize slider
    options.slider['noUiSlider'].on('change', () => {
      this.$inputs.first().trigger('input');
    });
  }

  _cacheElements() {
    super._cacheElements();

    this.$locationInput = $(this.selectors.locationInput);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();

    /**
     * Listen for inputs on the form
     * 1. Handle city input separately
     * 2. When the user changes something in the form,
     * signal that the input has finished
     */
    this.$form.on('input', event => {
      let target = event.target;
      if (target.name === 'city') return;

      this.$form.trigger('inputFinished');
    });

    /**
     * After the city is selected from the dropdown
     * signal that the input is finished
     */
    this.$locationInput.on('citySelected', () => {
      this.$form.trigger('inputFinished');
    });

    /**
     * After input is finished:
     * 1. Save all the information from the form
     * 2. Delegate retrieving profiles
     */
    this.$form.on('inputFinished', event => {
      this.collectFormInputs();

      $(document).trigger('searchForm:inputFinished', this.formData);
    });
  }
}
