(function() {
    'use strict';
    angular.module('test', []);

    angular.module('test')
        .controller('testController', ctrl);

    angular.module('test').value('users',[]);
    angular.module('test').service('userService', userService);

    ctrl.$inject = ['$scope','userService'];
    userService.$inject = ['$q', 'users'];

    function userService($q, users) {
        this.create = function(user) {
            users.push(angular.copy(user));
            return $q(function(reslove) {
                reslove('회원가입완료 id : ' + users.id);
            });
        };
        this.get = function() {
            return users;
            return $q(function(reslove) {
                reslove('조회완료');
            })
        };
    }

    function ctrl($scope,userService) {
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
            userService.create($scope.userItem).then
            (
                function (res) {
                    alert(res)
                }
            );
            $scope.userList = userService.get();
        };
    }
})();