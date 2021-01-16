import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import { Component } from 'react';
import Profiles from './components/profile/profiles';
// import Profile from '../src/components/profile';
import axios from 'axios';
import Section1 from './components/section1.js';


class App extends Component{
  constructor(props) {
  super(props);
  // this.inputText=React.createRef();  
  this.state = {

    value:'abhishek',
    // data:'abhishek',
    profile:[],
    copyCard:[],
  }

}




// handleChange = () => {
//   // this.setState({data:this.state.value})
//   // console.log(this.state.data);

//   this.apiSet();
// }

change= (event) => {
  this.setState({value:event.target.value})
}

apiSet = () => {
let url = `https://api.github.com/search/users?q=${this.state.value}`;

if(this.state.value){
  axios.get(url).then(res=>{
    this.setState({profile:res.data.items})
  })
}

    // fetch(url).then(
    //   (res)=>res.json().then(
    //     (finalRes)=> {
    //       this.setState({profile:finalRes.items})
    //         console.log(this.state.profile);

    //           })
    //         )


    // this.handleChange();

    }

    copyData = (id)=>{
      var clicked = this.state.profile.filter(profile=>profile.id===id)
      this.setState({copyCard:clicked});
    }


  render() {

    return(

      <div className="wrapper">
          <div className="section1">

              <Section1 data = {this.state.copyCard}/>

          </div>
          <div className="App">
            <Input onClick={this.apiSet} change = {this.change}></Input>
            <br></br>
            <Profiles apiset={this.state.profile} onClick={this.copyData} />
          </div>

      </div>
      
    );



  }
}


export default App;
