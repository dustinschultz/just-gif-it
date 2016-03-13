import angular from 'angular';
import angularUiRouter from 'angular-ui-router';
import ngFileUpload from 'ng-file-upload';
import routes from './home.routes';
import HomeController from './home.controller';
import upload from './upload';
import view from './view';
import result from './result';

export default angular.module('home', [angularUiRouter, ngFileUpload, upload, view, result])
    .config(routes)
    .controller('HomeController', HomeController)
    .name;
