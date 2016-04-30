var horses = angular.module('horses', [])
    .directive('users', ['$http', function ($http) {
        return {
            restrict: "A",
            link: function (scope) {
                scope.users = [];
                var getUsers = function () {
                    $http.get('/users').then(function (response) {
                        scope.users = response.data;
                    });
                };

                getUsers();
                window.setInterval(getUsers, 2000);
            },

            template:
                '<tr ng-repeat="user in users">' +
                    '<td><strong>{{user.name}}</strong></td><td>{{user.horse}}</td><td>{{user.shots}}</td>' +
                '</tr>'
        };
    }]);