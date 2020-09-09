export default {
  initializeDragNDrop({ $container }) {
    // Save reference to drag'n'drop container
    $dragNDropContainer = $container;
    // Save classes
    classes = this.classes;

    // Bind context
    _setUpEventListeners = _setUpEventListeners.bind(this);

    // Prepare drag'n'drop for usage
    _setUpEventListeners();
  },
};

// Private variables
let $dragNDropContainer,
  classes,
  droppedFiles = false;

/**
 * Helper function to setup drag'n'drop event listeners
 */
function _setUpEventListeners() {
  console.log($dragNDropContainer);
  $dragNDropContainer
    .on('drag dragstart dragend dragover dragenter dragleave drop', event => {
      // Prevent browser default behavior
      event.preventDefault();
      event.stopPropagation();
    })
    // Handle dragover indicator to let the user know about ability
    // to safety drop files
    .on('dragover dragenter', () => {
      $dragNDropContainer.addClass(classes.dragOver);
    })
    .on('dragleave dragend drop', () => {
      $dragNDropContainer.removeClass(classes.dragOver);
    })
    .on('drop', event => {
      // Save files for futher upload
      // Maybe we should do something differently here
      droppedFiles = event.originalEvent.dataTransfer.files;
    });
}
