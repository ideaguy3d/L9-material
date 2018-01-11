(function () {
    angular.module('L9-app').controller('WhatWeDoCtrl', ['$rootScope', 'homeSubFooterState',
        function ($rootScope, homeSubFooterState) {
            var vm = this;
            console.log("jha - homeSubFooterState = "+homeSubFooterState.curState);
            vm.title = "(: What We Do! ^_^ :)";
            $rootScope.ccShowHomeSubFooter = homeSubFooterState.mode;
        }
    ]);
})();