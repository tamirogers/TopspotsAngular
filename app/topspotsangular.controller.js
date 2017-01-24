(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['topspotsfactory', 'toastr'];

    /* @ngInject */
    function MainController(topspotsfactory, toastr) {
        var vm = this;
        vm.title = 'MainController';

        activate();

        ////////////////

        function activate() {
            getTopSpots();
        }

        function getTopSpots() {

            topspotsfactory.getTopSpots().then(
                function(response) {


                    vm.topspots = response.data;
                    toastr.success('We have some top top spots');
                    console.log('We have topspots!!');

                },
                function(error) {
                    if (error.data) {
                        toastr.error('There was a big problem: ' + error.data);
                    } else {
                        toastr.info('no data in my data :(');
                    }

                    console.log(error);
                }
            )
        }

        //--Copied from olde index.js.  Removed $scope added vm.  This added row for user adding new content.-

        vm.addRow = function() {
            vm.topspots.push({ 'name': vm.name, 'description': vm.description, 'location': [vm.link1, vm.link2] });
            //these values are what clears the fields after user inputs.
            vm.name = '';
            vm.description = '';
            vm.link1 = '';
            vm.link2 = '';
        };




    }

})();
// Code Reviewed By... LT and AP
