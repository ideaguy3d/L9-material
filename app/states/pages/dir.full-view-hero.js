(function () {
    angular.module('L9-app').directive('l9FullViewHero', [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'layout/templates/temp.full-view-hero.html',
                scope: {
                    l9TemplateInfo: "="
                }
            }
        }
    ]);
})();