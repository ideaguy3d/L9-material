(function () {
    angular.module('L9-app').directive('l9ResourceCard', [
        function () {
            return {
                restrict: 'E',
                scope: {
                    resourceCardInfo: "="
                },
                templateUrl: 'layout/templates/temp.l9-resource-card.html',
                transclude: true
            }
        }
    ])
})();