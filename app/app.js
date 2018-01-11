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
                    controllerAs: 'lab'
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
                    controller: 'uiPracCtrl',
                    controllerAs: 'ui'
                })
                .state('content-opt', {
                    url:'/what-we-do/content-opt',
                    templateUrl: 'states/what-we-do/view.content-opt.html'
                })
                .state('case-studies', {
                    url: '/case-studies',
                    templateUrl: 'states/case-studies/view.case-studies.html',
                    controller: 'uiPracCtrl',
                    controllerAs: 'ui'
                })
                // just to practice various animation
                .state('uit1', {
                    url: '/uit1',
                    templateUrl: 'ui-prac/uit1.html',
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