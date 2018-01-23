(function () {
    angular.module('L9-app').controller('WhatWeDoCtrl', ['$rootScope', 'homeSubFooterState',
        "smoothScroll",
        function ($rootScope, homeSubFooterState, smoothScroll) {
            var vm = this;
            vm.title = "(: What We Do! ^_^ :)";
            $rootScope.ccShowHomeSubFooter = homeSubFooterState.mode;
            vm.l9HeroDown = function () {
                var elem = document.getElementById("L9-what-we-do-goto");
                smoothScroll(elem);
            }
        }
    ]);
})();