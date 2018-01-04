/**
 * Created by Julius Alvarado on 9/10/2017.
 */


(function () {
    "use strict";

    angular.module('L9-app').controller('CoreCtrl', ['$scope',
        function ($scope) {
            $scope.ccCurrentUser = "";
            $scope.coreEdhubState = false;

            $scope.ccSetCurrentUser = function(userEmail){
                $scope.ccCurrentUser = userEmail;
            }
        }
    ]);
}());