import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import ngFileUpload from 'ng-file-upload';
import UploadController from './upload.controller';
import UploadService from './upload.service';

export default angular.module('upload', [angularUiRouter, ngFileUpload])
    .controller('UploadController', UploadController)
    .service('UploadService', UploadService)
    .name;
