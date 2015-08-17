var app = angular.module('virajchitnis.com', ['ngRoute', 'ngAnimate']);

app.factory('dataset', [function () {
    var dataset = {
        url: "http://www.virajchitnis.com",
        owner: "Viraj Chitnis",
        profession: "Web & iOS developer",
        github: "github.com/virajchitnis",
        about_me: "I am crazy about computers, gadgets, cars and any kind of technology. I love programming and building amazing things. I also love to travel and have visited 17 countries. I grew up in Mumbai (Bombay), India and currently live in Wynnewood, PA.",
        projects: [
            {
                name: "Weight & BMI Tracker",
                link: "",
                description: "The most challenging part of loosing and maintaining your weight is properly keeping track of it. This app will not only let you log your weight, but it will also help you by calculating your BMI and other weight management stats."
            },
            {
                name: "TravelCountant - Simple Travel Expense Keeper",
                link: "",
                description: "If you want a simple solution for keeping track of your expenses during a vacation trip, or you want to keep track of your expenses for a project your working on, this is the app for you. You can make multiple 'Pockets' in this app, a pocket is like an account, it defines the name of the trip/project, the amount that you have reserved for using with this endeavor, and the start date. You can then go about logging your expenses within each 'Pocket'. The expenses will be organized by day and at the bottom of each day you will be able to view the amount spent during that day and the amount remaining (balance carried forward). Finally, once your trip is over, or your project is complete, you can generate an email with your expenses and send it to your accountant or to yourself to keep it in record."
            }
        ],
        copyright: "Copyright © 2015 Viraj Chitnis. All Rights Reserved"
    };
    return dataset;
}]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/welcome', {
            templateUrl: '/templates/welcome.html',
            controller: 'WelcomeController',
            animate: false
        })
        .when('/about', {
            templateUrl: '/templates/about.html',
            controller: 'AboutController',
            animate: true
        })
        .otherwise({
            redirectTo: '/welcome'
        });
});

app.controller('WelcomeController', ['$scope', 'dataset', '$location', '$rootScope', function ($scope, dataset, $location, $rootScope) {
    $scope.dataset = dataset;

    $scope.loadAbout = function () {
        window.location = "#/about";
    };
}]);

app.controller('AboutController', ['$scope', 'dataset', '$location', '$rootScope', function ($scope, dataset, $location, $rootScope) {
    $scope.dataset = dataset;
}]);

/*app.run(['$scope', function ($scope) {
    $scope.$on('$routeChangeStart', function (next, current) {
        console.log('called');
        $scope.animateViewChange = current.$routeProvider.animate;
    });
}]);*/

app.run(function ($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        $rootScope.animationClass = (next.$$route.animate) ? 'reveal-animation' : '';
    });
});

/*app.animation('.reveal-animation', [function () {
    return {
        enter: function (element, done) {
            element.css('display', 'none');
            element.fadeIn(2000, done);
            return function () {
                element.stop();
            }
        },
        leave: function (element, done) {
            element.fadeOut(2000, done)
            return function () {
                element.stop();
            }
        }
    }
}]);*/
