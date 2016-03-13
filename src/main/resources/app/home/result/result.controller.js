export default class ResultController {

    constructor($stateParams, $state) {
        this.animatedGif = $stateParams.animatedGif;
        this.$state = $state;
    }

    clear() {
        this.$state.go('home');
    }

}

ResultController.$inject = ['$stateParams', '$state'];
