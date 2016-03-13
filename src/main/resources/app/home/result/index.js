import angular from 'angular';
import ResultController from './result.controller';

export default angular.module('result', [])
    .controller('ResultController', ResultController)
    .name;
