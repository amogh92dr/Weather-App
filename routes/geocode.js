const axios = require('axios');
const apikey = '747e8ccd41f79128e761a118aabfc844';
var weatherURL, geocodeURL;

getTemperature = (address) =>{	
	geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`
	axios.get(geocodeURL).then((response) =>{
		address = response.data.results[0].formatted_address;
		lat = response.data.results[0].geometry.location.lat;
		lng = response.data.results[0].geometry.location.lng;
		weatherURL = `https://api.darksky.net/forecast/${apikey}/${lat},${lng}`;
		return axios.get(weatherURL).then((response) =>{
			temp = response.data.currently.temperature;
			apparentTemp = response.data.currently.apparentTemperature;
			console.log('Address:', address);
			console.log('Latitude', lat);
			console.log('Longitude', lng);
			console.log(`Current Weather is ${temp}. But it feels like ${apparentTemp}`);
		});
	}).catch((e)=>{
		console.log('Oops! Something went wrong', e);
	});
}



module.exports = {
	getTemperature
}
