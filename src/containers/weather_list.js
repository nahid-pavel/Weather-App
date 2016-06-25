import React,{ Component} from 'react';
import { connect} from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import _ from 'lodash';

function celcius(w){
	  
var p = w.map(function(b){
		 
		 return b-273;
	 });
	 
     return p;
	
	
  }

class WeatherList extends Component{
	 
    
	
	renderWeather(cityData){
		
		const name= cityData.city.name;
		const temps = cityData.list.map(function(weather){
			
			
			return  weather.main.temp;
		});
		
		var lgg=celcius(temps);
		
		
		
		const humids = cityData.list.map(function(h){
			
			
			return h.main.humidity;
			
		});
		
		const pressures = cityData.list.map(function(p){
			
			
			return p.main.pressure;
			
		});
		
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;
		
		
	    return(
			<tr key={name}>
			   
			   <td><GoogleMap lon={lon} lat={lat} /></td>
			   <td> <Chart data={lgg} color="red" units="°"/></td>
			   <td> <Chart data={humids} color="green"  units="hPa"/></td>
			   <td> <Chart data={pressures} color="blue" units="%"/></td>
				  
		   </tr>
			
		);
		
		
	
}
	
	render(){
		
		
		return(
		  
		  <table className="table table-hover">
		  
		    <thead>
			  
			  <tr>
			  
			    <th> City </th>
				<th> Temperature(Celcius) </th>
				<th> Pressure(hPa) </th>
				<th> Humadity(%) </th>
				
			  
			  
			  </tr>
			
			
			</thead>
			
			<tbody>
			   
			   { this.props.weather.map(this.renderWeather) }
			   
			
			</tbody>
		  
		  
		 </table>
		
		
		
		);
		
		
	}
	
	
}

function mapStateToProps({ weather }){
	
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);