(function () {
    angular.module('L9-app').controller('WhatWeDoCtrl', ['$rootScope', 'homeSubFooterState',
        function ($rootScope, homeSubFooterState) {
            var vm = this;
            vm.title = "(: What We Do! ^_^ :)";
            $rootScope.ccShowHomeSubFooter = homeSubFooterState.mode;
        }
    ]);
})();