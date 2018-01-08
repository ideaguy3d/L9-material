(function(window) {

    angular.module('L9-app')
        .directive("fbaSection", function () {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'states/lab916/temps/temp.fba.sec.html',
                scope: {},
                link: function(scope, elem, attr) {

                }
            }
        });

})(window);