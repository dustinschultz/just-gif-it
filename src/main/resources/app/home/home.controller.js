export default class HomeController {

    constructor($state) {
        $state.transitionTo('upload');
    }
}

HomeController.$inject = ['$state'];
