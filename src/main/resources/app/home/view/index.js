import angular from 'angular';
import ngFileUpload from 'ng-file-upload';
import ViewController from './view.controller';
import upload from '../upload';

export default angular.module('view', [ngFileUpload, upload])
    .controller('ViewController', ViewController)
    .name;
