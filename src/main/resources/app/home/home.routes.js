import uploadTemplate from './upload/upload.html';
import viewTemplate from './view/view.html';
import resultTemplate from './result/result.html';

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
        })
        .state('upload', {
            url: '/upload',
            template: uploadTemplate,
            controller: 'UploadController',
            controllerAs: 'upload'
        })
        .state('view', {
            url: '/view',
            params: {
                files: null
            },
            template: viewTemplate,
            controller: 'ViewController',
            controllerAs: 'view'
        })
        .state('result', {
            url: '/result',
            params: {
                animatedGif: null
            },
            template: resultTemplate,
            controller: 'ResultController',
            controllerAs: 'result'
        });
};

routes.$inject = ['$stateProvider'];
