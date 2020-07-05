class PhotoUploader extends EditorModal {
  // Photos in Blob/File format that should be sent to the server
  photoFiles = [];

  photos = {};

  constructor(options) {
    super(options);

    // Save endpoint for id
    this.idEndpoint = options.idEndpoint;

    // Binding context
    this.previewPhotos = this.previewPhotos.bind(this);
    this.generatePhotoPreview = this.generatePhotoPreview.bind(this);
    this.getPhotoId = this.getPhotoId.bind(this);

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
  }

  setUpEventListeners() {
    // Listen to changes on the input elements
    this.$photoInputs.change((event) => {
      this.previewPhotos(event.target);
    });
  }

  /**
   * Function reading uploaded photos from input
   * @param {DOM Element} input - input element from which to take the photo files
   */
  previewPhotos(input) {
    if (input.files) {
      let filesAmount = input.files.length;

      for (let i = 0; i < filesAmount; i++) {
        let reader = new FileReader();

        reader.onload = (event) => {
          this.generatePhotoPreview();
        };

        // Start reading the image from the input
        reader.readAsDataURL(input.files[i]);

        // Add photo to files that should be submitted to the server
        this.photoFiles.push(input.files[i]);
      }
    }
  }

  /**
   * Function handling operations to preview photo
   */
  async generatePhotoPreview() {
    // Ask server for id for the currently previewing photo
    let id = await this.getPhotoId();

    // Make markup with the retrieved id
    this.generatePreviewHTML(id);
  }

  /**
   * Function getting id for the currently previewing photo
   */
  getPhotoId() {
    return fetch(this.idEndpoint)
      .then((response) => {
        if (response.ok) {
          // Read the passed number as text
          return response.text();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((id) => {
        return parseInt(id);
      })
      .catch((error) => {
        // We'll need to add a popup here
        alert("Error occured!");
      });
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
