(function() {
    'use strict';
    angular.module('test', []);

    angular.module('test')
        .controller('testController', ctrl);

    ctrl.$inject = ['$scope'];

    function ctrl($scope) {
        $scope.test = "hihihi";
    }
})();