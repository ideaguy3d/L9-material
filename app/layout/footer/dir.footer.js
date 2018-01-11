(function(window) {
    angular.module('L9-app')
        .directive("labFooter", function () {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'layout/footer/temp.footer.html',
                scope: {},
                link: function(scope, elem, attr, ctrl) {}
            }
        });

})(window);