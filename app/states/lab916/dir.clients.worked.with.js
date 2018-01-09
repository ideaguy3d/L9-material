(function(window) {
    angular.module('L9-app')
        .directive("clientsWorkedWith", function () {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'states/lab916/temps/temp.clients.worked.with.html',
                scope: {},
                link: function(scope, elem, attr) {

                }
            }
        });

})(window);