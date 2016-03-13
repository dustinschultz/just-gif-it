export default class UploadController {

    constructor($state) {
        this.$state = $state;
    }

    changed($files) {
        this.$state.go('view', {files: $files});
    }
}

UploadController.$inject = ['$state'];
