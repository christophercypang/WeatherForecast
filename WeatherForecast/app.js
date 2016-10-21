angular.module('WeatherApp', ['ngRoute', 'WeatherApp'])


.config(function ($routeProvider, $locationProvider){

	$routeProvider
		.when('/weather', {
			controller: 'WeatherController',
			templateUrl: 'src/weather.html'
		})
		.otherwise({
			redirectTo: '/weather'
		})

});