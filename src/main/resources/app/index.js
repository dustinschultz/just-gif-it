import 'bootstrap/dist/css/bootstrap.css';
import 'angular-loading-bar/build/loading-bar.css';
import './css/custom.css';
import angular from 'angular';
import angular_ui_router from 'angular-ui-router';
import angular_loading_bar from 'angular-loading-bar';
import config from './config';
import home from './home';

angular.module('app', [angular_ui_router, angular_loading_bar, home])
    .config(config);