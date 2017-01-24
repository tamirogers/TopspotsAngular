(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('topspotsfactory', topspotsfactory);

    topspotsfactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function topspotsfactory($http, $q) {
        var service = {
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////

        function getTopSpots() {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'topspots.json'
            }).then(function(response) {
                if (typeof response.data === 'object') {
                    defer.resolve(response);
                } else {
                    defer.reject('no data found :(');
                }


            }, function(error) {
                //catch statement
                console.log(error);
                defer.reject(error)
            });

            return defer.promise;
        }
    }
})();
