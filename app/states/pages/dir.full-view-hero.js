(function(){
    angular.module('L9-app').directive('l9FullPageHero', [
        function(){
            return {
                restrict: 'E',
                templateUrl: 'layout/templates/temp.full-view-hero.html',
                controller: 'PagesCtrl'
            }
        }
    ]);
})();