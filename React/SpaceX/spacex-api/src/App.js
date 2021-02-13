import logo from './logo.svg';
import React from 'react';
import { Component } from 'react';
import './App.css';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
import axios from 'axios';

class App extends Component {

  state= {
    launches:[],
    api:[],
    year:null,
  };


  componentDidMount() {
    let url = `https://api.spaceXdata.com/v3/launches?limit=100`;
      // let url = `https://api.github.com/search/users?q=abhishek`;
      axios.get(url).then(res=>{
      // console.log(res.data.rocket.first_stage.cores[0].land_success);
      this.setState({api:res.data});
 

  })
}

launchYear =(year)=> {
  // var clicked=this.state.api.filter(api=>api.launch_year==year);
  
  this.setState({year:clicked});
  console.log(this.state.year);
  
  let url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${this.state.year}`;
  axios.get(url).then(res=>{
    // console.log(res.data.rocket.first_stage.cores[0].land_success);
  this.setState({api:res.data});


})
}
  




  render() {
    return (

      <div className="main-div">
        <h2>SpaceX Launch Programs</h2>
        
          <div className="container">
              <Filters className="filters" api={this.state.api}
              onClick={this.launchYear} />
              <Cards api={this.state.api} />
          </div>

        
        


      <h4>Developed By: Abhishek</h4>

      </div>
     



    );


  }


}

export default App;
