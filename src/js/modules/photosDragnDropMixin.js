export default {
  initializeDragNDrop({ $container }) {
    $container
      .on('drag dragstart dragend dragover dragenter dragleave drop', event => {
        // Prevent browser default behavior
        event.preventDefault();
        event.stopPropagation();
      })
      // Handle dragover indicator to let the user know about ability
      // to safety drop files
      .on('dragover dragenter', () => {
        $container.addClass(this.classes.dragOver);
      })
      .on('dragleave dragend drop', () => {
        $container.removeClass(this.classes.dragOver);
      });
  },
};
