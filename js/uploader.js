class PhotoUploader extends EditorModal {
  // Photos in Blob/File format that should be sent to the server
  photoFiles = [];

  photos = {};

  // FileReader object to handle reading image data
  reader = new FileReader();

  constructor(options) {
    super(options);

    // Save endpoint for id
    this.idEndpoint = options.idEndpoint;

    // Binding context
    this.previewPhotos = this.previewPhotos.bind(this);
    this.generatePreviewHTML = this.generatePreviewHTML.bind(this);
    this.getPhotosIds = this.getPhotosIds.bind(this);
    this.makeURLObjects = this.makeURLObjects.bind(this);

    // Prepare Uploader
    this.cacheElements();
    this.setUpEventListeners();
    this.makeURLObjects();
  }

  cacheElements() {
    super.cacheElements();

    // Container to preview uploaded images
    this.$previewContainer = this.$modal.find(this.selectors.previewContainer);

    // Inputs
    this.$photoInputs = this.$modal.find(this.selectors.input);
  }

  setUpEventListeners() {
    // Listen to changes on the input elements
    this.$photoInputs.change((event) => {
      this.previewPhotos(event.target);
    });

    // Preview photos when it is loaded
    //this.reader.onload = (event) => {
    //  this.generatePhotoPreview();
    //};
  }

  // Make this function to convert all the endpoints into URL objects later
  makeURLObjects() {
    this.idEndpoint = new URL(this.idEndpoint);
  }

  /**
   * Function retrieving ids according to uploading amount of files.
   * @param {Number} filesAmount - amount of files to get ids for
   */
  getPhotosIds(filesAmount) {
    // Add amount of files as a query parameter

    this.idEndpoint.searchParams.set("amount", String(filesAmount));

    // Make request to the server
    return fetch(this.idEndpoint)
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

        // Save the id of the loading photo for reference
        reader.id = ids[i];

        // Preview photos when it is loaded
        reader.onload = (event) => {
          this.generatePreviewHTML(event.target.id);
        };

        // Start reading photo
        reader.readAsDataURL(input.files[i]);
      }
    }
  }

  /**
   * Function generating markup for preview
   * @param {Number} id - photo id that will be used in the database to store photo
   */
  generatePreviewHTML(id) {
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
      .append($("<img>").attr("src", "img/photo1.jpg").attr("alt", ""))
      .append($privacyBox)
      .append(
        $("<button></button>")
          .addClass(
            "delete bg-white rounded d-flex justify-content-between align-items-center px-1"
          )
          .text("Delete")
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
      .append(
        $("<div></div>")
          .addClass("photo-description")
          .append([$figure, $descriptionTextarea])
      )
      .appendTo(this.$previewContainer);
  }
}
