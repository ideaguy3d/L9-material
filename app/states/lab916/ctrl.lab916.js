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

            vm.iconAd = "http://lab916.wpengine.com/mock2/images/icon-ad.png";
            vm.iconCc = "http://lab916.wpengine.com/mock2/images/icon-cc.png";
            vm.iconCm = "http://lab916.wpengine.com/mock2/images/icon-cm.png";

            vm.heroPlaceImg = "http://via.placeholder.com/250x150";
            vm.heroTitle = "SKIP THE LEARNING CURVE OF SELLING YOUR BRAND ON AMAZON.";
            vm.heroPara = "Lab 916 a creative marketing agency in Sacramento, CA, that helps Amazon sellers get more sales. We take the guesswork out of selling on Amazon by crafting compelling, persuasive listings, improving PPC performance, and driving sales. In short: you have the amazing products, and we have the skills and expertise to get them into customer’s hands.";
            vm.heroQuote = "LAB916 isn’t your typical amateur Amazon marketing agency with zero experience. They actually increase traffic to your listing and more importantly, the vitalness of conversion. If you’re serious about growing your FBA business, give 10 minutes of your time to LAB916.";
            vm.heroImg = "./l9-material/app/images/ill/hero-img.png";

            vm.moSalesPara = "We simplify your work at all stages. Your customers will enjoy participating in the sales strategy process, and they will see the beautiful and understandable structure of the amazon listing";

            vm.moMoney = "You’ll Make More Money";
            vm.moMoneyPara = "From PPC management to listing optimizations, we help you discover the highest return on investment you’ve ever had.";
            vm.moMoneyImg = "http://lab916.wpengine.com/mock2/images/sbs-i2.png";

            vm.withPros = "You'll Work With Professionals";
            vm.withProsPara = "From deep PPC knowledge to conversion optimized design, we bring the best of both worlds to grow your profitability.";
            vm.withProsImg = "http://lab916.wpengine.com/mock2/images/sbs-i1.png";

            vm.fbaBiz = "Grow your FBA Business Faster";
            vm.fbaBizPara = "From quick wins to long term product strategies, we create a profit rich environment to help you scale with ease.";
            vm.fbaBizImg = "http://lab916.wpengine.com/mock2/images/sbs-i3.png";

            vm.kleinQuote = "It’s rare to find Amazon marketers who understand ROI and actually act on it. LAB916 knows PPC, they know design, and more importantly, they execute. They don’t care about worthless vanity metrics, they care about making you more money.";
            vm.sellerCentralImg1 = "http://lab916.wpengine.com/mock2/images/hero-channel-management.png";

            vm.whatWeDo = "We work hard to make sure your products get the sales that they deserve on the Amazon marketplace. Our services include Content Optimization, Advertising, and Channel Management: three key elements to make your product rise above the competition.";
        }
    ]);
}());