/**
 * Created by Julius Alvarado on 9/2/2017.
 */

angular.module('L9-app', [
        'angular-md5',
        'ui.router',
        'ngMaterial',
        'ngMdIcons'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('landing', {
                    url: '/',
                    templateUrl: 'states/lab916/view.lab916.html',
                    controller: 'Lab916Ctrl',
                    controllerAs: 'lab',
                    resolve: {

                    }
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'states/contact/view.contact.html',
                    controller: 'uiPracCtrl',
                    controllerAs: 'ui'
                })
                .state('what-we-do', {
                    url: '/what-we-do',
                    templateUrl: 'states/what-we-do/view.what-we-do.html',
                    controller: 'WhatWeDoCtrl',
                    controllerAs: 'wedo',
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
                    url:'/what-we-do/content-optimization',
                    templateUrl: 'states/what-we-do/view.content-opt.html',
                    controller: 'WhatWeDoCtrl',
                    controllerAs: 'wedo',
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
                    url:'/what-we-do/advertising',
                    templateUrl: 'states/what-we-do/view.promote.html',
                    controller: 'WhatWeDoCtrl',
                    controllerAs: 'wedo',
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
                    url:'/what-we-do/channel-management',
                    templateUrl: 'states/what-we-do/view.channel-management.html',
                    controller: 'WhatWeDoCtrl',
                    controllerAs: 'wedo',
                    resolve: {
                        homeSubFooterState: function () {
                            return {
                                curState: 'channel-management',
                                mode: true
                            };
                        }
                    }
                })
                .state('case-studies', {
                    url: '/case-studies',
                    templateUrl: 'states/case-studies/view.case-studies.html',
                    controller: 'uiPracCtrl',
                    controllerAs: 'ui',
                    resolve: {
                        homeSubFooterState: function () {
                            return {
                                curState: 'content-opt',
                                mode: true
                            };
                        }
                    }
                })
                .state('service-puddle', {
                    url: "/service-puddle",
                    templateUrl: "states/pages/view.service-puddle.html"
                })
                .state('resources', {
                    url: "/resources",
                    templateUrl: "states/pages/view.resources.html"
                })
                .state('careers', {
                    url: "/careers",
                    templateUrl: "states/pages/view.career.html"
                })
                .state('why-us', {
                    url: "/why-us",
                    templateUrl: "states/pages/view.why-us.html"
                })
                // -----------------------------------
                // just to practice various animation
                .state('uit1', {
                    url: '/uit1',
                    templateUrl: 'states/ui-prac/uit1.html',
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