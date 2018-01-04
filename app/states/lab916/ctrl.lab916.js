/**
 * Created by Julius Alvarado on 1/3/2018.
 */

(function () {
    "use strict";

    angular.module('L9-app').controller('Lab916Ctrl', [
        function () {
            const vm = this;
            vm.message = "hello from the Lab916 controller ^_^/";
            vm.heroTitle = "SKIP THE LEARNING CURVE OF SELLING YOUR BRAND ON AMAZON.";
            vm.heroParagraph = "Lab 916 a creative marketing agency in Sacramento, CA, that helps Amazon sellers get more sales. We take the guesswork out of selling on Amazon by crafting compelling, persuasive listings, improving PPC performance, and driving sales. In short: you have the amazing products, and we have the skills and expertise to get them into customer’s hands.";
            vm.heroQuote = "LAB916 isn’t your typical amateur Amazon marketing agency with zero experience. They actually increase traffic to your listing and more importantly, the vitalness of conversion. If you’re serious about growing your FBA business, give 10 minutes of your time to LAB916.";
        }
    ]);
}());