(function () {
    angular.module('L9-app').controller('WhatWeDoCtrl', ['$rootScope', 'homeSubFooterState',
        "smoothScroll", "$mdSidenav",
        function ($rootScope, homeSubFooterState, smoothScroll, $mdSidenav) {
            var vm = this;
            $rootScope.ccShowHomeSubFooter = homeSubFooterState.mode;

            vm.title = "(: What We Do! ^_^ :)";
            vm.showContentSubMenu = false;

            vm.intro = "We work hard to make sure your products get the sales that they deserve on Amazon. Our services take care of everything you’ll need from start to finish: account setup, content optimization, daily channel management, advertising, compiling reviews, and expanding your business. With our expertise and experience in all of these areas, you’ll be on the road to long-term success in no time.";
            vm.accountSetup1WeDo = "Over half of all product searches begin on Amazon, which is more than every other search engine combined. To be successful, you need to master the Amazon platform. ";
            vm.accountSetup2WeDo = "We’ll get your account up and running and optimized for maximum sales from the start, so you can make the most of the world’s most powerful marketplace.";
            vm.contentWeDo = "";
            vm.jenKimQuote = "LAB916 isn’t your typical amateur Amazon marketing agency with zero experience. They actually increase traffic to your listing and more importantly, the vitalness of conversion. If you’re serious about growing your FBA business, give 10 minutes of your time to LAB916."
            vm.jenKimQuoteAuth = "- Jennifer Kim, Co-Founder @ Seigla Athletica";

            vm.l9HeroDown = function () {
                var elem = document.getElementById("L9-what-we-do-goto");
                smoothScroll(elem);
            };

            vm.toggleShowContentSubMenu = function () {
                vm.showContentSubMenu = !vm.showContentSubMenu;
            };

            vm.serviceSidenav = function (name) {
                var elem = document.getElementById(name);
                smoothScroll(elem);
            };

            vm.isSidenavOpen = function () {
                return $mdSidenav("L9md-services-sidenav-left").isOpen();
            };

            vm.toggleSidenav = buildToggler("L9md-services-sidenav-left");

            vm.closeServiceSidenav = function () {
                console.log("jha - vm.closeServiceSidenav() invoked");
                $mdSidenav("L9md-services-sidenav-left").close()
                    .then(function () {
                        // make little "services sidenav" appear.
                        console.log("jha - in sidenav callback");
                    });
            };

            function buildToggler(navID) {
                return function () {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            console.log("toggle " + navID + " is done, build something!");
                        });
                };
            }
        }
    ]);
})();