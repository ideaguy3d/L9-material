(function () {
    angular.module('L9-app').controller('WhatWeDoCtrl', ['$rootScope', 'homeSubFooterState',
        "smoothScroll",
        function ($rootScope, homeSubFooterState, smoothScroll) {
            var vm = this;
            vm.title = "(: What We Do! ^_^ :)";

            vm.intro = "We work hard to make sure your products get the sales that they deserve on Amazon. Our services take care of everything you’ll need from start to finish: account setup, content optimization, daily channel management, advertising, compiling reviews, and expanding your business. With our expertise and experience in all of these areas, you’ll be on the road to long-term success in no time.";
            vm.accountSetup1WeDo = "Over half of all product searches begin on Amazon, which is more than every other search engine combined. To be successful, you need to master the Amazon platform. ";
            vm.accountSetup2WeDo = "We’ll get your account up and running and optimized for maximum sales from the start, so you can make the most of the world’s most powerful marketplace.";
            vm.contentWeDo = "";
            vm.jenKimQuote = "LAB916 isn’t your typical amateur Amazon marketing agency with zero experience. They actually increase traffic to your listing and more importantly, the vitalness of conversion. If you’re serious about growing your FBA business, give 10 minutes of your time to LAB916."
            vm.jenKimQuoteAuth = "- Jennifer Kim, Co-Founder @ Seigla Athletica";


            $rootScope.ccShowHomeSubFooter = homeSubFooterState.mode;
            vm.l9HeroDown = function () {
                var elem = document.getElementById("L9-what-we-do-goto");
                smoothScroll(elem);
            };
        }
    ]);
})();