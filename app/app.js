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