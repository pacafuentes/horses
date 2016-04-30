var myapp = angular.module('myApp', [])
    .controller('fiddleCtrl', ['$scope', function ($scope) {

        $scope.data = [{
            id: 1,
            name: 'Fred',
            description: 'not the best worker'
        }, {
            id: 1,
            name: 'Wilma',
            description: 'Freds Wife'
        }, {
            id: 1,
            name: 'Barney',
            description: 'Freds best friend'
        }, {
            id: 1,
            name: 'Louise',
            description: 'Never heard of Fred'
        }, {
            id: 1,
            name: 'Tracy',
            description: 'Some Chick'
        }, {
            id: 1,
            name: 'Foo',
            description: 'Inventer or bar'
        }

        ];


    }])
    .directive('trRow', function ($compile) {
        return {
            restrict: "E",
            replace: true,
            link: function (scope, element, attrs) {
                scope.id = scope.d.id;
                scope.name = scope.d.name;
                scope.desc = scope.d.description;

                var tmpl = '<tr  ><td>{{id}}</td><td><strong>{{name}}</strong></td><td>{{desc}}</td></tr>';
                element.html(tmpl).show();
                //var e =$compile(tmpl)(scope);
                //element.replaceWith(e);
                var e = $compile(element.contents())(scope);
            },
            scope: {
                d: "="
            }
        };
    });
