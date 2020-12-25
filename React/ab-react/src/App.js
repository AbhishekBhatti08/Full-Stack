import logo from './logo.svg';
import './App.css';
import Practice1 from './Practice/Practice1';
import { Component } from 'react';



// class Car extends Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>;
//   }
// }



class App extends Component {

  state = {

    firstName: '',

    Persons: [
      {name:'Abhishek', age:22, id: 1},
      {name:'Shrey', age:27, id: 2},
      {name:'Amit', age:26, id: 3}
    ],

    isActive: true,

    

  };

 Show = () => {

  console.log("Show");
  this.setState({isActive:true});

  var NewPersons =[
    {name:'Abhishek1', age:22, id: 1},
    {name:'Shrey1', age:27, id: 2},
    {name:'Amit1', age:26, id: 3}
  ]
  
  this.setState({Persons:NewPersons})
  
};


Hide = () => {

  console.log("Hide");
  this.setState({isActive:false})
}


changeName =(event) => {
this.setState({
  firstName: event.target.value,
})
}


DynamicChange = (event) =>{

 

  // this.setState({newId:event.target.value})


 var newData = [  ...this.state.Persons]

  console.log(newData);
    console.log(event.target.id);
  newData[event.target.id-1].name = event.target.value;
  // var newId = event.target.id;

  // console.log(event.target.id);

  // var x = this.state.Persons[0];
  this.setState({Persons: newData})

  
}

// Brand =(a) => {
//   this.setState({
//     value: a.target.value,
//   })
//   }




// ChangeText=()=> {
// var NewPersons =[
//   {name:'Abhishek1', age:22},
//   {name:'Shrey1', age:27},
//   {name:'Amit1', age:26}
// ]

// this.setState({Persons:NewPersons})
// }

 
  render() {

    let allPersons = null;
    if (this.state.isActive) {
      allPersons = <div>
        {
          this.state.Persons.map((Person) => {

            return <Practice1 name = {Person.name} age = {Person.age} changed = {this.DynamicChange} id = {Person.id} />


          })
        }
      </div>
    }

    return (

     <div className="App">
       
       
      <button onClick={this.Show}>Show name!</button>
      <button onClick={this.Hide}>Hide name!</button>

      
      {this.state.isActive?
      <div>
      <h1>Hi .. Here are the details</h1>
      <h3>first name: {this.state.firstName}</h3>
      {/* <Car brand = " " /> */}
      {/* <Practice1 name={this.state.Persons[0].name} age ={this.state.Persons[0].age} changed = {this.DynamicChange}/>
      <Practice1 name={this.state.Persons[1].name} age ={this.state.Persons[1].age} />
      <Practice1 name={this.state.Persons[2].name} age ={this.state.Persons[2].age} />
       */}

      

      <input onChange={this.changeName}></input>

      <br />
      <br />

      {/* <input value={this.props.name} onChange={this.Brand}></input> */}
      </div>:null}

      {allPersons}
      </div>
      
    );

  }

}

export default App;
