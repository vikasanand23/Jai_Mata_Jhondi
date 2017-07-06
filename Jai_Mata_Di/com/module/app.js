(function() {
    angular.module("app", ["ngRoute"])
        .config(function($routeProvider) {
            $routeProvider
                .when("/Home", {
                    controller: "homeController",
                    templateUrl: "com/view/home.html"
                })
                .when("/About Us", {
                    controller: "aboutController",
                    templateUrl: "com/view/about.html"
                })
				.when("/Programmes", {
                    controller: "programmeController",
                    templateUrl: "com/view/programme.html"
                })
				.when("/Success Stories", {
                    controller: "sucessController",
                    templateUrl: "com/view/sucess.html"
                })
				.when("/Updates", {
                    controller: "updatesController",
                    templateUrl: "com/view/updates.html"
                })
				.when("/Get Involved", {
                    controller: "involvedController",
                    templateUrl: "com/view/involved.html"
                })
				.when("/Contact us", {
                    controller: "contactController",
                    templateUrl: "com/view/contact.html"
                })
				.otherwise({redirectTo: '/Home'});

        });
}());