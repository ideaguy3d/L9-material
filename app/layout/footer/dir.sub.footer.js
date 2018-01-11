(function(window){
    angular.module('L9-app')
        .directive("labSubFooter", [
            function () {
                return {
                    restrict: 'E',
                    transclude: true,
                    templateUrl: 'layout/footer/temp.sub.footer.html'
                }
            }
        ]);
})(window);