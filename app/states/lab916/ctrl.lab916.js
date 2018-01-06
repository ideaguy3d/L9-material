/**
 * Created by Julius Alvarado on 1/3/2018.
 */

(function () {
    "use strict";

    angular.module('L9-app').controller('Lab916Ctrl', [
        function () {
            const vm = this;
            vm.slogan = "We help amazon sellers get more sales.";
            vm.slogan2 = "AMAZON OPTIMIZATION SPECIALISTS";

            vm.heroPlaceImg = "http://via.placeholder.com/250x150";
            vm.heroTitle = "SKIP THE LEARNING CURVE OF SELLING YOUR BRAND ON AMAZON.";
            vm.heroPara = "Lab 916 a creative marketing agency in Sacramento, CA, that helps Amazon sellers get more sales. We take the guesswork out of selling on Amazon by crafting compelling, persuasive listings, improving PPC performance, and driving sales. In short: you have the amazing products, and we have the skills and expertise to get them into customer’s hands.";
            vm.heroQuote = "LAB916 isn’t your typical amateur Amazon marketing agency with zero experience. They actually increase traffic to your listing and more importantly, the vitalness of conversion. If you’re serious about growing your FBA business, give 10 minutes of your time to LAB916.";

            vm.moMoney = "You’ll Make More Money";
            vm.moMoneyPara = "From PPC management to listing optimizations, we help you discover the highest return on investment you’ve ever had.";
            vm.moMoneyImg = "https://static1.squarespace.com/static/58486f891b631beb1bea6ebe/t/5855dcc459cc6819385f4bb3/1482022090224/hero-banner-3.jpg?format=500w";

            vm.withPros = "You'll Work With Professionals";
            vm.withProsPara = "From deep PPC knowledge to conversion optimized design, we bring the best of both worlds to grow your profitability.";
            vm.withProsImg = "https://static1.squarespace.com/static/58486f891b631beb1bea6ebe/t/5855dc61be659437630c41b8/1482021999802/work-with-professionals.jpg?format=500w";

            vm.fbaBiz = "Grow your FBA Business Faster";
            vm.fbaBizPara = "From quick wins to long term product strategies, we create a profit rich environment to help you scale with ease.";
            vm.fbaBizImg = "https://static1.squarespace.com/static/58486f891b631beb1bea6ebe/t/5855dd2829687f4b4bec0dfd/1482022188375/?format=500w";

            vm.kleinQuote = "It’s rare to find Amazon marketers who understand ROI and actually act on it. LAB916 knows PPC, they know design, and more importantly, they execute. They don’t care about worthless vanity metrics, they care about making you more money.";
            vm.sellerCentralImg1 = "https://static1.squarespace.com/static/58486f891b631beb1bea6ebe/t/5855be2bd482e9ab4654218c/1482014253332/static1.squarespace.jpg?format=1500w"

            vm.whatWeDo = "We work hard to make sure your products get the sales that they deserve on the Amazon marketplace. Our services include Content Optimization, Advertising, and Channel Management: three key elements to make your product rise above the competition.";
        }
    ]);
}());