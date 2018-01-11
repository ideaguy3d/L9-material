(function(window){
    angular.module('L9-app')
        .directive("labSubFooter", [
            function () {
                return {
                    restrict: 'E',
                    transclude: false,
                    templateUrl: 'layout/footer/temp.sub.footer.html',
                    require: 'CoreCtrl',
                    link: function (scope, elem, attr, ctrl) {
                        console.log("the ctrl = ");
                        console.log(ctrl);
                    }
                }
            }
        ]);
})(window);