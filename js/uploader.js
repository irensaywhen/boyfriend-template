class PhotoUploader extends EditorModal {
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
    this.previewPhotos = this.previewPhotos.bind(this);
    this.generatePreviewHTML = this.generatePreviewHTML.bind(this);
    this.updateMarkup = this.updateMarkup.bind(this);
    this.getPhotosIds = this.getPhotosIds.bind(this);
    this.uploadNewPhotos = this.uploadNewPhotos.bind(this);

    // Prepare Uploader
    this.cacheElements();
    this.setUpEventListeners();
  }

  cacheElements() {
    super.cacheElements();

    // Container to preview uploaded images
    this.$previewContainer = this.$modal.find(this.selectors.previewContainer);

    // Inputs
    this.$photoInputs = this.$modal.find(this.selectors.input);

    // Gallery
    this.$gallery = $(this.selectors.gallery);
  }

  setUpEventListeners() {
    super.setUpEventListeners();
    // Listen to changes on the input elements
    this.$photoInputs.change((event) => {
      this.previewPhotos(event.target);
    });

    this.$form.submit((event) => {
      event.preventDefault();

      // If user didn't upload new photos
      if (Object.keys(this.photoData).length === 0) {
        // Add popup here
        alert("No photos specified!");
        return;
      }
      // Make server request here
      // And update markup
      // After that - clean all the cached data
      this.uploadNewPhotos();
    });
  }

  clean() {
    this.photoData = {};
  }

  async uploadNewPhotos() {
    this.collectData();
    this.generateFormData();

    let response;

    try {
      // Make server request to save photos
      response = await this.makeRequest({
        headers: this.requests.savePhotos.headers,
        endpoint: this.requests.savePhotos.endpoint,
        method: this.requests.savePhotos.method,
        body: this.formData,
      });
    } catch (error) {
      // Add popup here
      alert(error);
    }

    if (response.success) {
      // Add popup here
      alert(response.message);

      // Update markup according to photoData object
      for (let id in this.photoData) {
        let photoData = this.photoData[id];

        // Add each uploaded photo to the markup
        this.updateMarkup({
          id: id,
          src: photoData.src,
          privacy: photoData.privacy,
          description: photoData.description,
        });
      }

      this.closeModal();
    } else {
      // Add unsuccessful popup here
      alert(response.message);
    }
  }

  /**
   * Function retrieving ids according to uploading amount of files.
   * @param {Number} filesAmount - amount of files to get ids for
   */
  getPhotosIds(filesAmount) {
    // Add amount of files as a query parameter
    this.requests.getIds.endpoint.searchParams.set(
      "amount",
      String(filesAmount)
    );

    // Make request to the server
    return fetch(this.requests.getIds.endpoint)
      .then((response) => {
        if (response.ok) {
          // Read the array of passed ids as JSON
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((ids) => ids)
      .catch((error) => {
        // We'll need to add a popup here
        alert("Error occured!");
      });
  }

  /**
   * Function reading uploaded photos from input
   * @param {DOM Element} input - input element from which to take the photo files
   */
  async previewPhotos(input) {
    let ids;

    if (input.files) {
      let filesAmount = input.files.length;

      try {
        // Wait until the server provide ids for photos
        ids = await this.getPhotosIds(filesAmount);
      } catch (error) {
        //Here we'll need to add popup
        alert("Error with Ids");
      }

      for (let i = 0; i < filesAmount; i++) {
        // Make fileReader for each photo
        let reader = new FileReader();

        // Cache id of the loading photo
        let id = ids[i];

        // Initialize object to store information about this photo
        this.photoData[id] = {};

        // Save the id of the loading photo for reference
        reader.id = id;

        this.setReaderEventListeners(reader);

        // Start reading photo
        reader.readAsDataURL(input.files[i]);

        // Save file
        this.savePhotoInformation({ id: id, file: input.files[i] });
      }
    }
  }

  /**
   * Function attaching event listeners to File Reader
   * @param {FileReader object} reader - reader to attach event listeners to
   */
  setReaderEventListeners(reader) {
    // Preview photos when it is loaded
    reader.onload = (event) => {
      // Cache
      let [id, src] = [event.target.id, event.target.result];

      this.generatePreviewHTML({ id: id, src: src });
      // Save src
      this.savePhotoInformation({ id: id, src: src });
    };

    // Handle errors
    reader.onerror = (event) => {
      // Add popup here
      alert("Something went wrong");
    };
  }

  /**
   * Function deleting uploaded photos
   */
  discardChanges() {
    this.$previewContainer.empty();
  }

  /**
   * Function generating markup for preview
   * @param {Number} id - photo id that will be used in the database to store photo
   * @param {String} src - src of the image to preview
   */
  generatePreviewHTML({ id, src }) {
    // Preparing ids for preview
    let privacyId = "photo-upload-privacy-" + id;
    let descriptionId = "upload-description" + id;

    // Privacy checkbox control
    let $privacyControl = $("<div></div>")
      .addClass("custom-control custom-switch")
      .append(
        $("<input>")
          .attr("type", "checkbox")
          .attr("id", privacyId)
          .addClass("custom-control-input privacy-input")
      )
      .append(
        $("<label></label>")
          .attr("for", privacyId)
          .addClass("custom-control-label privacy-label")
      )
      .appendTo("body");

    // Privacy box
    let $privacyBox = $("<div></div>")
      .addClass(
        "privacy bg-white rounded d-flex justify-content-between align-items-center px-1"
      )
      .append($("<h4></h4>").addClass("m-0").text("Privacy"))
      .append($privacyControl);

    // Figure
    let $figure = $("<figure></figure>")
      .append($("<img>").attr("src", src).attr("alt", ""))
      .append($privacyBox)
      .append(
        $("<button></button>")
          .attr("type", "button")
          .addClass(
            "delete bg-white rounded d-flex justify-content-between align-items-center px-1"
          )
          .text("Delete")
          .click((event) => {
            this.deletePhoto(event);
          })
          .append($('<i class="fas fa-trash-alt"></i>'))
      );

    // Description textarea
    let $descriptionTextarea = $("<div></div>")
      .addClass("form-group")
      .append(
        $("<label></label>")
          .attr("for", descriptionId)
          .text("Add photo description")
      )
      .append(
        $("<textarea></textarea>")
          .attr("id", descriptionId)
          .attr("rows", "4")
          .attr("placeholder", "Photo description")
          .addClass("form-control new-photo-description")
      );

    // Photo container
    $("<div></div>")
      .addClass("col-12 col-sm-6 col-md-4 col-xl-3 photo-container")
      .attr("data-id", id)
      .append(
        $("<div></div>")
          .addClass("photo-description")
          .append([$figure, $descriptionTextarea])
      )
      .appendTo(this.$previewContainer);
  }

  collectData() {
    $(this.selectors.container).each((index, element) => {
      let id = element.dataset.id;

      let privacy = $(element)
        .find(this.selectors["privacy-input"])
        .is(":checked");

      let description = $(element).find(this.selectors.description).val();

      this.savePhotoInformation({
        id: id,
        privacy: privacy,
        description: description,
      });
    });
  }

  updateMarkup({ id = null, src = null, privacy = false, description = "" }) {
    this.$gallery.append(
      $("<div></div>")
        .addClass("swiper-slide gallery-slide")
        .append(
          $("<img>")
            .attr("src", src)
            .attr("alt", description)
            .attr("data-toggle", "modal")
            .attr("data-target", "#edit-photo")
            .attr("data-id", id)
            .attr("data-description", description)
            .attr("data-privacy", privacy)
            .addClass("gallery-photo")
        )
    );
  }
}
