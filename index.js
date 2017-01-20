// defined the top-level module app container.  myApp is the name of the module
myApp = angular.module('myApp', []);

// registering the controller to the module, inject $scope, add a properties to $scope and assign a value to it.
//scope is an object.
myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
    // this was not needed... $scope.products = [];
    // $scope.firstName = 'Stttt';

    //http service is used to grab data from the data file.
    $http({
        method: 'GET',
        url: 'topspots.json'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        //I created mytopspots that has the data from response.  
        $scope.mytopspots = response.data;

        // function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.

    });

    //extra credit to add a form for users to add their own location.  Added variable addRow to scope 
    //the push is an http service that appends the new data to my old database. We are asking angular
    //to do this with a function.  Use the name of my first database mytopspots.
    //This function is fired on the submit button.  The name description location
    //must match the properties from my original database, these also go in the ng-model.
    $scope.addRow = function() {
        $scope.mytopspots.push({ 'name': $scope.name, 'description': $scope.description, 'location': $scope.link });
        //these three below are actually not needed (I think).
        $scope.name = '';
        $scope.description = '';
        $scope.link = '';


    };
    // Not sure what this is for...

    // $scope.submitProduct = function() {
    //     console.log('before: ' + $scope.products.length);

    //     $scope.products.push({ Code: $scope.product.Code, Name: $scope.product.Name });
    //     console.log('after:' + $scope.products.length);
    //     console.log($scope.products);


    //     $scope.showOverlay = false;
    // };



}])
