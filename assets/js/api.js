'use strict'

const api_key = "f1ec8e17f146dc54a599b2e9ecc8530a";

/* 
	Вытягиваем данные с сервера
	URL (string) - API url
	callback (function) - callback
*/
export const fetchData = function(URL, callback) {
	fetch(`${URL}&appid=${api_key}`)
		.then(res => res.json())
		.then(data => callback(data));
}

export const url = {
	currentWeather(lat, lon) {
		return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
	},
	forecast(lat, lon) {
		return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
	},
	airPollution(lat, lon) {
		return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
	},
	reverseGeo(lat, lon) {
		return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
	},

	// query (string) - к примеру: "London", "Kyiv"
	geo(query) {
		return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
	}
}