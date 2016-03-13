export default class UploadService {

    constructor(Upload) {
        this.uploader = Upload;
    }

    upload(params) {
        return this.uploader.upload({
            url: '/upload',
            data: params
        });
    }
};

UploadService.$inject = ['Upload'];