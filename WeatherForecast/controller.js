angular.module('WeatherApp')

.controller('WeatherController', function($scope, $rootScope) {


	var tempDay = '';
	var tempMonth = '';
	var date = '';


	$scope.getCurrDate = function(){
		var today = new Date();
		tempDay = today.getDay();
		date = today.getDate();
		tempMonth = today.getMonth();
		var year = today.getFullYear();

		var day = '';

		switch (tempDay) {
			case 0:
			day = 'Sunday';
			break;
			case 1:
			day = 'Monday';
			break;
			case 2:
			day = 'Tuesday';
			break;
			case 3:
			day = 'Wednesday';
			break;
			case 4:
			day = 'Thursday';
			break;
			case 5:
			day = 'Friday';
			break;
			case 6:
			day = 'Saturday';
			break;
			default:
			day = '';
		}	

		var month = '';

		switch(tempMonth) {
			case 0:
			month = 'January';
			break;

			case 1:
			month = 'February';
			break;

			case 2:
			month = 'March';
			break;

			case 3:
			month = 'April';
			break;

			case 4:
			month = 'May';
			break;

			case 5:
			month = 'June';
			break;

			case 6:
			month = 'July';
			break;

			case 7:
			month = 'August';
			break;

			case 8:
			month = 'September';
			break;

			case 9:
			month = 'October';
			break;

			case 10:
			month = 'November';
			break;

			case 11 :
			month = 'December';
			break;

			default:
			month = '';
		}

		var currentDate = day + ', ' + month + ' ' + date + ' ' + year;
		//console.log(currentDate);
		$rootScope.dateToday = currentDate;

	}


});