(function() {
    'use strict';
    angular.module('test', []);

    angular.module('test')
        .controller('testController', ctrl);

    ctrl.$inject = ['$scope'];

    function ctrl($scope) {
        $scope.test = "hihihi";
        $scope.userItem =
        {
            id : '',
            pw : '',
            name : '',
            year: '',
            month : '',
            day : ''
        };
        $scope.userList = [];
        $scope.createUser = function() {
            $scope.userList.push(angular.copy($scope.userItem));
            console.log($scope.userList);
            console.log($scope.userItem);
        };

0    }
})();