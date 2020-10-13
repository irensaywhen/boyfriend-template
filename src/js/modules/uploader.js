import EditorModal from './modal.js';
import Handlebars from 'handlebars';
import prepareTemplates from './prepareTemplates.js';
import photoUploadMixin from './photoUploadMixin';

export default class PhotoUploader extends EditorModal {
  /**
   * Information about photos.
   * @param photoData.id - id of the photo from the database
   * @param photoData.id.file - photo fileobject to save to the database
   * @param photoData.id.src - photo src
   * @param photoData.id.private - photo privacy information
   * @param photoData.id.description - photo description
   */
  photoData = {};

  constructor(options) {
    super(options);

    this.configuration.uploader = true;

    // Binding context
    this._updateMarkup = this._updateMarkup.bind(this);

    // Prepare Uploader
    this._cacheElements();
    this._setUpEventListeners();

    // Prepare template for photo preview
    this.previewTemplate = prepareTemplates(
      options.selectors.previewTemplateId
    );

    Object.assign(PhotoUploader.prototype, photoUploadMixin);
    this.initializePhotoUpload();
    this.initializeLoadingIndicators(this.$form);
  }

  _cacheElements() {
    super._cacheElements();

    // Container to preview uploaded images
    this.$previewContainer = this.$modal.find(this.selectors.previewContainer);

    // Inputs
    this.$photoInputs = this.$modal.find(this.selectors.input);

    // Gallery
    this.$gallery = $(this.selectors.gallery);
  }

  _setUpEventListeners() {
    super._setUpEventListeners();

    /**
     * When files are either dropped or selected using inputs:
     * 1. Get the amount of photos selected
     * 2. Send this amount to server
     * 3. Retrieve unique ids for these photos
     */
    this.$form.on('photoUpload:filesInputed', (event, data) => {
      // Delete previously saved ids
      // Maybe, you won't need it
      this.ids = null;

      let { method, headers, endpoint } = this.requests.getIds;

      // Add amount of files as a query parameter
      endpoint.searchParams.set('amount', data.amount);

      this.ids = this.makeRequest({
        headers,
        endpoint,
        method,
      })
        .then(response => {
          // Throw error with response title and message
          if (!response.success) {
            let error = new Error(response.message);
            error.name = response.title;
            throw error;
          }

          return response.ids;
        })
        .catch(error => {
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: 'error',
          });
        });
    });

    this.$form.submit(event => {
      event.preventDefault();

      this.collectData();

      let { headers, method, endpoint } = this.requests.savePhotos,
        photoData = this.photoData;

      this.makeRequest({
        headers,
        endpoint,
        method,
        body: JSON.stringify(photoData),
      })
        .then(response => {
          if (!response.success) {
            let error = new Error(response.message);
            error.name = response.title;
            throw error;
          }

          // Show each photo on markup
          for (let id in photoData) {
            let { src, privacy, description } = photoData[id];

            // Add each uploaded photo to the markup
            this._updateMarkup({
              id,
              src,
              privacy,
              description,
            });
          }

          this.closeModal();

          // Show success popup
          this.showRequestResult({
            title: response.title,
            text: response.message,
            icon: 'success',
          });
        })
        .catch(error =>
          this.showRequestResult({
            title: error.name,
            text: error.message,
            icon: 'error',
          })
        );
    });
  }

  clean() {
    this.photoData = {};
  }

  /**
   * Function deleting uploaded photos
   */
  _discardChanges() {
    this.$previewContainer.empty();
  }

  collectData() {
    $(this.selectors.container).each((index, element) => {
      let id = element.dataset.id;

      let privacy = $(element)
        .find(this.selectors['privacy-input'])
        .is(':checked');

      let description = $(element).find(this.selectors.description).val();

      this.savePhotoInformation({
        id,
        privacy,
        description,
      });
    });
  }

  // After setting up request, maybe, we can change update markup function, too
  _updateMarkup({ id = null, src = null, privacy = false, description = '' }) {
    this.$gallery.append(
      $('<div></div>')
        .addClass('swiper-slide gallery-slide')
        .append(
          $('<img>')
            .attr('src', src)
            .attr('alt', description)
            .attr('data-toggle', 'modal')
            .attr('data-target', '#edit-photo')
            .attr('data-id', id)
            .attr('data-description', description)
            .attr('data-privacy', privacy)
            .addClass('gallery-photo')
        )
    );
  }

  //------------------------------------------
  // Functions specific to class utilizing photo uploader
  //------------------------------------------

  /**
   * 1. Wait until the server gives ids for uploading photos
   * 2. When ids are retrieved, check whether it is an array, and if not, throw an error
   * 3. Get the last id from the list
   * 4. Save photo information for the current id
   * 5. Preview photo
   * @param {FileReader} fileReader -fileReader object
   * that stores information about the read photo
   */
  async _preview(fileReader) {
    try {
      var ids = await this.ids;

      // Validate ids type
      if (!Array.isArray(ids)) throw new TypeError('Should be an array');
    } catch (error) {
      ids = null;

      this.showRequestResult({
        title: error.name,
        text: error.message,
        icon: 'error',
      });
    }
    // If ids wasn't retrieved, don't do anything
    if (!ids) return;

    let src = fileReader.result,
      id = ids.pop();

    // Save information about the current photo
    this.photoData[id] = {};
    this.savePhotoInformation({ id, src });

    let compiledPhotoTemplate = Handlebars.compile(this.previewTemplate);
    compiledPhotoTemplate = compiledPhotoTemplate({ id, src });

    // Append template
    this.$previewContainer.append(compiledPhotoTemplate);
  }
}
