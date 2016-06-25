import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';


export default class SearchBar extends Component {
   
  constructor(props){
	  
	  super(props);
	 
      this.state= {term:''};
	  
	  this.onInputChange = this.onInputChange.bind(this);
	  this.onFormSubmit = this.onFormSubmit.bind(this);
	  
	  
  }
  
   onInputChange(event){
	  
	  
	this.setState({term: event.target.value});
	
	
	
	  
  }
  
  onFormSubmit(event){
	  
	  event.preventDefault();
	  
	  const p = this.props.fetchWeather(this.state.term);
	  
	  console.log(p);
	  
	  
	  this.setState({ term:''});
	  
	  
  }
  
  render() {
	  
	 return (
	
	 <form  onSubmit={this.onFormSubmit} className="input-group">
       
	  <input  placeholder="Please enter a city name for search"
	          className="form-control"
			  value={this.state.term}
			  onChange= {this.onInputChange}
	  
	  />
	  <span className="input-group-btn">
	  
	    <button type="submit" className="btn btn-secondary"> Submit </button>
	   
	  </span>
	 </form>
	 
	
	 
	
    );
  }
}

export default connect(null,{ fetchWeather})(SearchBar);
