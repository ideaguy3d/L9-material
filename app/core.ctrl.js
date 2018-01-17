/**
 * Created by Julius Alvarado on 9/10/2017.
 */


(function () {
    "use strict";

    angular.module('L9-app').controller('CoreCtrl', ['$rootScope', '$scope', '$timeout', '$q', '$log',
        '$location', '$anchorScroll', 'smoothScroll',
        function ($rootScope, $scope, $timeout, $q, $log, $location, $anchorScroll, smoothScroll) {
            checkUrl();
            $rootScope.ccShowHomeSubFooter = true;

            $scope.ccCurrentUser = "";
            $scope.coreEdhubState = false;
            $scope.ccTempDrop = false;

            $scope.ccScrollTop = function () {
                //-- old non animated scroll
                // $location.hash('L9-main-nav');
                // $anchorScroll();
                var elem = document.getElementById('L9-main-nav');
                smoothScroll(elem);
            };

            $scope.ccToggleTempDrop = function () {
                $scope.ccTempDrop = !$scope.ccTempDrop;
            };

            $scope.ccSetCurrentUser = function (userEmail) {
                $scope.ccCurrentUser = userEmail;
            };

            function checkUrl() {
                console.log("jha - checkUrl() invoked... \n");
                if ($location.url() === '/') {
                    $rootScope.ccShowHomeSubFooter = true;
                }
            }

            /*************************************************
             * Search Bar stuff .START()
             * **********************************************/
            var self = this;

            self.simulateQuery = false;
            self.isDisabled = false;
            self.noCache = true;

            // list of `state` value/display objects
            self.states = loadAll();
            self.querySearch = querySearch;
            self.selectedItemChange = selectedItemChange;
            self.searchTextChange = searchTextChange;

            self.newState = newState;

            function newState(state) {
                alert("Sorry! You'll need to create a Constitution for " + state + " first!");
            }

            // ******************************
            // Internal methods
            // ******************************

            /**
             * Search for states... use $timeout to simulate
             * remote dataservice call.
             */
            function querySearch(query) {
                var results = query ? self.states.filter(createFilterFor(query)) : self.states,
                    deferred;
                if (self.simulateQuery) {
                    deferred = $q.defer();
                    $timeout(function () {
                        deferred.resolve(results);
                    }, Math.random() * 1000, false);
                    return deferred.promise;
                } else {
                    return results;
                }
            }

            function searchTextChange(text) {
                $log.info('Text changed to ' + text);
            }

            function selectedItemChange(item) {
                $log.info('Item changed to ' + JSON.stringify(item));
            }

            /**
             * Build `states` list of key/value pairs
             */
            function loadAll() {
                var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

                return allStates.split(/, +/g).map(function (state) {
                    return {
                        value: state.toLowerCase(),
                        display: state
                    };
                });
            }

            /**
             * Create filter function for a query string
             */
            function createFilterFor(query) {
                var lowercaseQuery = angular.lowercase(query);

                return function filterFn(state) {
                    return (state.value.indexOf(lowercaseQuery) === 0);
                };

            }

            /*************************************************
             * Search Bar stuff .END()
             * **********************************************/
        }
    ]);
}());