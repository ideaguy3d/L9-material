(function () {
    angular.module('L9-app')
        .controller("PagesCtrl", [
            function () {
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