/**
 * Created by Julius Alvarado on 12/23/2017.
 */

(function () {
    "use strict";

    angular.module('L9-app').controller('uiPracCtrl', [
        function () {
            const vm = this;
            vm.toggle = false;
            vm.togglePracNav = function () {
                vm.toggle = !vm.toggle;
            }
        }
    ]);
}());