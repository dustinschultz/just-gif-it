export default class ViewController {

    constructor(UploadService, $stateParams, $state) {
        this.uploadService = UploadService;
        this.file = $stateParams.files[0];
        this.$state = $state;
    }

    submit() {
        this.uploadService.upload({
                file: this.file,
                start: this.start,
                end: this.end,
                speed: this.speed,
                repeat: this.repeat ? true : false
            })
            .then((response) => {
                this.$state.go('result', {animatedGif: response.data});
            });
    }
}

ViewController.$inject = ['UploadService', '$stateParams', '$state'];
