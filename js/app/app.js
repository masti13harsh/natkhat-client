var myApp = angular.module('myApp', ['ngRoute']);

// Routings
myApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', 
			{
				templateUrl: './templates/login-register/login.html',
				controller: 'loginController'
			})
		.when('/welcome', 
			{
				templateUrl: './templates/welcome.html',
				controller: 'welcomeController'
			})
		.otherwise({redirectTo: '/'});	
}]);