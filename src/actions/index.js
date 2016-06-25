import axios from 'axios';

const API_KEY='8688018399c6afa7944a27c0206069aa';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city){
	
	const url = `${ROOT_URL }&q=${city},in`;
	
	const request = axios.get(url);
	
	console.log(request);
	
	
	
	return{
		
		type:FETCH_WEATHER,
		payload:request
		
		
		
	};
	
	
	
}