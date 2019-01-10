import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {connect} from 'react-redux';
import { setSearchField } from '../actions';


class App extends Component  {
  
  constructor(props){
  	super(props);
  	this.state = {
  	robots: [],
	searchfield :''
  	}
  }
  

  componentDidMount() {
	  fetch('https://jsonplaceholder.typicode.com/users').then(response=> 
		  response.json())
	  .then(users => 
		  this.setState({ robots: users}));
	  }
	

  onSearchChange = (event) => {
  	this.setState({searchfield: event.target.value})
  }


  
  render(){
	const {robots, searchfield } = this.state;
    const filteredRobots = this.state.robots.filter(robot => {
	return (robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
	})
    return !robots.length ?
		<h1>Loading</h1>:
	(
  	<div className='tc'>
  	<h1 className="f1">RoboFriends</h1>
  	<SearchBox searchChange={this.onSearchChange} />
	<Scroll>
       <ErrorBoundary>
  	     <CardList robots={filteredRobots} />
		</ErrorBoundary>
	</Scroll>
  	</div>
  	);
   }
}



export default App;