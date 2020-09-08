import fileReaderMixin from './fileReaderMixin';

export default {
  initializePhotoUpload({ form, modal }) {
    // Initialize fileReader
    fileReaderMixin.initializeFileReader({ form, modal });

    // Binding functions from the Class
    this._preview = this._preview.bind(this);
    this._saveFile = this._saveFile.bind(this);
  },
};
