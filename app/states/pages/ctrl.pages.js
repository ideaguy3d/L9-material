(function () {
    angular.module('L9-app')
        .controller("PagesCtrl", ['$location', '$anchorScroll', 'smoothScroll',
            function ($location, $anchorScroll, smoothScroll) {
                var vm = this;
                vm.resourcesDataModel2 = [
                    {
                        name: 'Blog Link',
                        h1: 'Guides and Ebooks',
                        para: 'Here we blog about everything Amazon Sales !',
                        img: 'http://via.placeholder.com/300x150'
                    },
                    {
                        name: 'Instagram',
                        h1: 'Our instagram for Amazon Sales',
                        para: 'We regularly make images for Amazon sales and upload them to Instagram',
                        img: 'http://via.placeholder.com/300x150'
                    },
                    {
                        name: 'Twitter',
                        h1: 'Your resource for Amazon Sales tweets',
                        para: 'We are always tweeting about various sales strategies',
                        img: 'http://via.placeholder.com/300x150'
                    },
                    {
                        name: 'Facebook',
                        h1: 'Our Facebook page',
                        para: 'Visit the best Facebook page for Amazon Sales !',
                        img: 'http://via.placeholder.com/300x150'
                    },
                    {
                        name: 'YouTube',
                        h1: 'Lab916 Amazon sales Videos',
                        para: 'We\'re working on Video content too!',
                        img: 'http://via.placeholder.com/300x150'
                    },
                    {
                        name: 'ebook',
                        h1: 'We wrote an eBook',
                        para: 'Read our eBook written by our copywriter Jennifer',
                        img: 'http://via.placeholder.com/300x150'
                    },
                    {
                        name: 'Webinar',
                        h1: 'Join our Webinars powered by a Google platform',
                        para: 'We like sharing our knowledge and experience in Amazon Sales via online webinars',
                        img: 'http://via.placeholder.com/300x150'
                    },
                    {
                        name: 'Podcast',
                        h1: 'We have an in-house recording studio',
                        para: 'Download and Listen to our Monthly Podcasts in MP3 format.',
                        img: 'http://via.placeholder.com/300x150'
                    },
                    {
                        name: '...More to come',
                        h1: 'Keep visiting our site for updates',
                        para: 'There is nothing we are more passionate about than getting you sales and we are figuring out new ways to help our clients achieve this!',
                        img: 'http://via.placeholder.com/300x150'
                    }
                ];

                vm.whyL9 = {
                    teamOfExperts: {
                        h1: "IN-HOUSE TEAM OF EXPERTS",
                        para: "Our Sacramento office is teeming with talent. Working with\n" +
                        "Lab 916 means taking advantage of the combined expertise\n" +
                        "of a vibrant team of professionals. With experts in\n" +
                        "Amazon optimization and marketing, web development,\n" +
                        "graphic design, photography, copywriting, and e-commerce,\n" +
                        "there is always someone working hard to advance\n" +
                        "your brand. Our office, warehouse, and studio are all on-site,\n" +
                        "so we have complete freedom and control over creating\n" +
                        "content that is up to our high standards. We’re creative, passionate,\n" +
                        "proactive problem-solvers who care about our\n" +
                        "clients and love the work that we do— you’ll always be\n" +
                        "taken care of and treated\n" +
                        "as a priority\n",
                        img: "http://lab916.wpengine.com/img/services/team-of-experts.png"
                    },
                    experPros: {
                        h1: "Experienced Professionals",
                        para: "You’ll be working with professionals with five years of Amazon\n" +
                        "experience. When you work with us, you’ll never be caught off\n" +
                        "guard, fumbling for solutions. Any issue you may possibly encounter\n" +
                        "is no sweat— we’ve dealt with it before.\n" +
                        "Our team has built not only a growing agency, but also a successful\n" +
                        "bicycle company. This means we have hands-on experience\n" +
                        "with everything involved in creating and selling a brand\n" +
                        "from the ground up: package design, manufacturing, shipping,\n" +
                        "international logistics, and more. We know both ends of the\n" +
                        "business of Amazon and have experienced firsthand what\n" +
                        "drives success— now, it’s time to bring that to your brand."
                    },
                    diverseClients: {
                        h1: "Diverse Clients",
                        para: "Our clients so far have spanned every category on Amazon,\n" +
                        "from grocery to pet supplies to sports. In the process, we’ve\n" +
                        "learned the ins and outs of a variety of industries to produce\n" +
                        "results that we can be proud of every time. Our wide-ranging\n" +
                        "portfolio means we know what’s best for every type of business,\n" +
                        "because we’ve done it before."
                    },
                    bigBizRes: {
                        h1: "Big Business Results with a small business approach",
                        para: "You’ll enjoy a personal touch when you work with us. We’re creative,\n" +
                        "passionate, proactive problem-solvers who care about our clients\n" +
                        "and love the work that we do—you’ll always be taken care of and\n" +
                        "treated as a priority. We’re small enough to offer around-the-clock\n" +
                        "support and always be on call to answer your questions. You’ll be\n" +
                        "assigned a personal point of contact and welcomed to chat with us\n" +
                        "via phone or Skype; we want to learn everything about you so we\n" +
                        "can tailor our services to meet your business’s unique needs. Plus,\n" +
                        "you’ll always be kept up-to-date with reports on your sales and advertising\n" +
                        "campaign status. We know that this customized approach\n" +
                        "drives the most results, so we’re sticking with it for the long run.",
                        img: ""
                    },
                    dataDriven: {
                        h1: "Data-Driven decisions, Proven Results",
                        para: "We know how to get results, and you don’t have to take our word for\n" +
                        "it— check out our case studies documenting the paths to success\n" +
                        "that we have carved so far. Our methods are proven to be effective,\n" +
                        "so you can rest assured that your business is in good hands. We approach\n" +
                        "each individual project as an opportunity to create a new\n" +
                        "market-defining case study by practicing meticulous research and\n" +
                        "thorough data analysis. Every decision we make is backed by data,\n" +
                        "for success that lives up to our high standards every time.",
                        img: "http://lab916.wpengine.com/img/services/data-img.png"
                    }
                };

                vm.l9HeroDown = function () {
                    var elem = document.getElementById("L9-row-goto");
                    smoothScroll(elem);
                };

                vm.gotoContactUs = function () {
                    $location.url("contact");
                };

                vm.heroScrollDown2 = function () {
                    console.log("jha - heroScrollDown invoked...");
                    $location.hash("L9-view-row1");
                    $anchorScroll();
                };

                vm.heroScrollDown = function () {
                    var elem = document.getElementById('L9-view-row1');
                    smoothScroll(elem);
                };

                vm.careerTemplateInfo = {
                    info: {
                        name: "Lab 916 Career's",
                        bg: { // this is being linked to ngStyle attr dir
                            'background': 'url(http://careerconnections.nj.gov/careerconnections/images/hero/RightCareer-480922793.jpg) no-repeat center/cover'
                        },
                        pos: "end start"
                    }
                };

                vm.servicePuddleTemplateInfo = {
                    info: {
                        name: "Service Puddle",
                        bg: { // this is being linked to ngStyle attr dir
                            'background': 'url(http://lab916.wpengine.com/img/L9-ph-lg.jpg) no-repeat center/cover'
                        },
                        pos: "end end"
                    }
                };

                vm.resourceCardImagePath = "http://via.placeholder.com/300x150"
            }
        ]);
})();