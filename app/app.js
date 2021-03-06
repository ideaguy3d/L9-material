/**
 * Created by Julius Alvarado on 9/2/2017.
 */

angular.module('L9-app', [
    'angular-md5',
    'ui.router',
    'ngMaterial',
    'ngMdIcons',
    'smoothScroll'
]).config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        //-- Lab916 controlled state:
            .state('landing', {
                url: '/',
                templateUrl: 'states/lab916/view.lab916.html',
                controller: 'Lab916Ctrl',
                controllerAs: 'lab',
                resolve: {
                    homeSubFooterState: function () {
                        return {
                            curState: 'landing',
                            mode: true
                        };
                    }
                }
            })

            //-- WhatWeDoCtrl (aka "Services") controlled states:
            .state('what-we-do', {
                url: '/what-we-do',
                templateUrl: 'states/what-we-do/view.what-we-do.html',
                controller: 'WhatWeDoCtrl',
                controllerAs: 'whatWedoCtrl',
                resolve: {
                    homeSubFooterState: function () {
                        return {
                            curState: 'what-we-do',
                            mode: false
                        };
                    }
                }
            })
            .state('content-opt', {
                url: '/what-we-do/content-optimization',
                templateUrl: 'states/what-we-do/view.content-opt.html',
                controller: 'WhatWeDoCtrl',
                controllerAs: 'whatWedoCtrl',
                resolve: {
                    homeSubFooterState: function () {
                        return {
                            curState: 'content-opt',
                            mode: true
                        };
                    }
                }
            })
            .state('promote', {
                url: '/what-we-do/advertising',
                templateUrl: 'states/what-we-do/view.promote.html',
                controller: 'WhatWeDoCtrl',
                controllerAs: 'whatWedoCtrl',
                resolve: {
                    homeSubFooterState: function () {
                        return {
                            curState: 'promote',
                            mode: true
                        };
                    }
                }
            })
            .state('channel-management', {
                url: '/what-we-do/channel-management',
                templateUrl: 'states/what-we-do/view.channel-management.html',
                controller: 'WhatWeDoCtrl',
                controllerAs: 'whatWedoCtrl',
                resolve: {
                    homeSubFooterState: function () {
                        return {
                            curState: 'channel-management',
                            mode: true
                        };
                    }
                }
            })

            //-- PagesCtrl controlled states:
            .state('service-puddle1', {
                url: "/service-puddle1",
                templateUrl: "states/pages/view.service-puddle1.html",
                controller: 'PagesCtrl',
                controllerAs: 'pagesCtrl'
            })
            .state('service-puddle2', {
                url: "/service-puddle2",
                templateUrl: "states/pages/view.service-puddle2.html",
                controller: 'PagesCtrl',
                controllerAs: 'pagesCtrl'
            })
            .state('careers', {
                url: "/careers",
                templateUrl: "states/pages/view.career.html",
                controller: "PagesCtrl",
                controllerAs: "pagesCtrl"
            })
            .state('why-lab916', {
                url: "/why-lab916",
                templateUrl: "states/pages/view.why-us.html",
                controller: "PagesCtrl",
                controllerAs: "pagesCtrl"
            })

            // -----------------------------------
            // just to practice various animation
            .state('uit1', {
                url: '/uit1',
                templateUrl: 'states/ui-prac/view.uit1.html',
                controller: 'uiPracCtrl',
                controllerAs: 'ui'
            })
            .state('uit2', {
                url: '/uit2',
                templateUrl: 'states/ui-prac/view.uit2.html',
                controller: 'uiPracCtrl',
                controllerAs: 'ui'
            });

        $urlRouterProvider.otherwise('/');

        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyDEyWzMw0NPhKUnjWTNsYeqAWazk5cR_LI",
            authDomain: "edhub-jobs.firebaseapp.com",
            databaseURL: "https://edhub-jobs.firebaseio.com",
            projectId: "edhub-jobs",
            storageBucket: "edhub-jobs.appspot.com",
            messagingSenderId: "743478741402"
        };
        // firebase.initializeApp(config);
    }
]);