import logo from './logo.svg';
import './App.css';
import Practice1 from './Practice/Practice1';
import { Component } from 'react';
import Output from './Practice/Output';
import Input from './Practice/Input';



// class Car extends Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>;
//   }
// }



class App extends Component {

  state = {

    firstName: '',

    Persons: [
      { name: 'Abhishek', age: 22, id: 1 },
      { name: 'Shrey', age: 27, id: 2 },
      { name: 'Amit', age: 26, id: 3 }
    ],

    isActive: true,

    length: 0,
    label: 'Set your password as strong',

    value: 'abhishek',
    data: '',
    profile: [],
    status: false,
    name: 'abhishek',

  };

  Show = () => {

    console.log("Show");
    this.setState({ isActive: true });

    var NewPersons = [
      { name: 'Abhishek1', age: 22, id: 1 },
      { name: 'Shrey1', age: 27, id: 2 },
      { name: 'Amit1', age: 26, id: 3 }
    ]

    this.setState({ Persons: NewPersons })

  };


  Hide = () => {

    console.log("Hide");
    this.setState({ isActive: false })
  }


  changeName = (event) => {
    this.setState({
      firstName: event.target.value,
    })
  }


  DynamicChange = (event) => {



    // this.setState({newId:event.target.value})


    var newData = [...this.state.Persons]

    console.log(newData);
    console.log(event.target.id);
    newData[event.target.id - 1].name = event.target.value;

    // newData[event.target.id-1] = null;

    this.setState({ Persons: newData })


  }

  showDiv = (event) => {

    var x = [...this.state.Persons];

    console.log(x);

    x[event.target.id - 1] = '';

    this.setState({ Persons: x });
  }

  ApiCall = () => {

    this.setState({ name: this.state.value })
    console.log(this.state.name)
    this.componentDidMount();
  }

  ChangeInput = (event) => {
    this.setState({ value: event.target.value });
    this.setState({ name: this.state.value });
    // console.log(event.target.value)
    this.setState({ length: event.target.value.length });

  }




  // ApiCall = () => {

  //   fetch(`https://api.github.com/search/users?q=${this.state.value}`).then(
  //     res => res.json().then(finalRes => {
  //       // let newProfile = JSON.parse(this.state.profile);

  //       let profile = finalRes.items.map((prof) => {
  //         return (
  //           <div>
  //             {finalRes.items}
  //           </div>
  //         )
  //       })
  //       this.setState({ profile: profile });

  //       console.log(this.state.profile);


  //     })
  //   )
  // };

  componentDidMount() {

    let url = `https://api.github.com/search/users?q=${this.state.name}`;
    fetch(url).then(res => res.json()).then((finalRes) => {
      console.log(finalRes.items);
      let x = finalRes.items;
      this.setState({ profile: x });
      console.log(this.state.profile);

    })

  }

  render() {

    let allPersons = null;
    if (this.state.isActive) {
      allPersons = <div>
        {
          this.state.Persons.map((Person) => {

            return <Practice1 name={Person.name} onClick={this.showDiv} age={Person.age} changed={this.DynamicChange} id={Person.id} />


          })
        }
      </div>
    }

    const classes = [];

    if (this.state.length <= 5) {
      classes.push("weak")
    }
    else if (this.state.length > 5 && this.state.length < 9) {
      classes.push("strong")

    }

    else if (this.state.length > 10) {
      classes.push("strong")
      classes.push("bold")
    }

    // let data;
    // data = fetch(`https://api.github.com/search/users?q=${this.state.value}`).then(res=>res.json().then(finalRes=>{
    // console.log(finalRes.items)}));

    const profile = this.state.profile;



    return (

      <div className="App">


        <button onClick={this.Show}>Show name!</button>
        <button onClick={this.Hide}>Hide name!</button>


        {this.state.isActive ?
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
          </div> : null}

        {allPersons}

        <Input Changed={this.ChangeInput}></Input>
        <p className={classes.join(" ")}>{this.state.label}</p>
        <Output value={this.state.value}></Output>
        <br></br>

        <button onClick={this.ApiCall} >Click Here..!</button>

        {


          profile.map((profile) => {
            return (
              <div className="apiContainer">

                <div className="apiCard">
                  <li>{profile.login}</li>
                  <br></br>
                  <li>id: {profile.id}</li>

                </div>

              </div>
            )

          }


          )

        }


      </div>

    );

  }

}

export default App;
