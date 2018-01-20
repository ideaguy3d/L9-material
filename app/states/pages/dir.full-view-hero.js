(function () {
    angular.module('L9-app').directive('l9FullViewHero', [
        function () {
            return {
                restrict: 'E',
                templateUrl: 'states/pages/templates/temp.full-view-hero.html',
                scope: {
                    l9TemplateInfo: "=",
                    l9HeroDown: "&"
                }
            }
        }
    ]);
})();