angular.module('WeatherApp')

.controller('WeatherController', function($scope, $rootScope) {


	var tempDay = '';
	var tempMonth = '';
	var date = '';

	$scope.clickedCity = function(param){
		chosenCity = param;
		//$rootScope.currentCity = chosenCity;
		var forecastDays = 7;
		var countryCode = 'CA';

		$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + chosenCity + ',' + countryCode + '&cnt=' + forecastDays +'&APPID=a261d0b5f91d49be3dc6b16ab109b71b')
		.success(function(forecastData) {
			//console.log(forecastData);
			//$rootScope.currentCity = forecastData.name;

			for (var i = 0; i < forecastDays; i++){
				var tempWeather = [];

				var generateDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * (i+1));
				var tempDay = generateDate.getDay();
				var tempMonth = (generateDate.getMonth()) + 1;
				var tempDate = generateDate.getDate();

				var day = '';

				switch (tempDay) {
					case 0:
					day = 'Sun';
					break;
					case 1:
					day = 'Mon';
					break;
					case 2:
					day = 'Tue';
					break;
					case 3:
					day = 'Wed';
					break;
					case 4:
					day = 'Thu';
					break;
					case 5:
					day = 'Fri';
					break;
					case 6:
					day = 'Sat';
					break;
					default:
					day = '';
				}

				var fullDate = day + ' ' + tempMonth + '/' + tempDate;	
				tempTemperatureC[i] = ((Math.round(((forecastData.list[i].temp.day) - 273.15) * 10) / 10) + '°C');
				tempTemperatureF[i] = ((Math.round(((forecastData.list[i].temp.day) * 9/5 - 459.67) * 10) / 10) + '°F');

				tempWeather.push(fullDate);
				tempWeather.push(tempTemperatureC[i]);
				//tempWeather.push(Math.round(((forecastData.list[i].temp.day) * 9/5 - 459.67) * 10) / 10);
				//tempWeather.push(forecastData.list[i].weather[0].main);
				

				forecast[i] = tempWeather;

				var tempWeatherIcon = forecastData.list[i].weather[0].main;
				//console.log(tempWeatherIcon);

				switch(tempWeatherIcon){
					case 'Rain':
					tempIcon = 'wi wi-rain';
					break;
					case 'Thunderstorm':
					tempIcon = 'wi wi-thunderstorm';
					break;
					case 'Drizzle':
					tempIcon = 'wi wi-sprinkle';
					break;
					case 'Snow':
					tempIcon = 'wi wi-snow';
					break;
					case 'Atmosphere':
					tempIcon = 'wi wi-fog';
					break;
					case 'Clear':
					tempIcon = 'wi wi-day-sunny';			
					break;
					case 'Clouds':
					tempIcon = 'wi wi-cloudy';
					break;
					default:
					tempIcon = 'wi wi-na';
				}
			//console.log(tempIcon);

				tempIconArr[i] = tempIcon;

		}
		//console.log(tempIconArr[0]);

		$rootScope.forecastWeatherIcon = tempIconArr;
		//console.log($rootScope.forecastWeatherIcon);


		$rootScope.forecastArray = forecast;
		//console.log($rootScope.forecastArray);

	})



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