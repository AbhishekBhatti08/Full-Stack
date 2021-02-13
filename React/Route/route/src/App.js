import { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './components/NavBar/navBar';
import Posts from './components/Post/posts';
import CreatePost from './components/CreatePost/createPost';
import Post from './components/Post/Posts/post';
import redux from './reduxPractice';

class App extends Component{
  state= {
    post:['Hi', 'Hello', 'Bye', 'Happy', 'Joy', 'Fun', 'Party'],
    card:[],

  };

  card = (post) => {
    var clicked = this.state.post.filter(post=>post===post)
    this.setState({card:clicked});
    console.log(post);

  }
  
  render() {
  
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
        <Route exact path="/">
          <Posts post={this.state.post}/>
        </Route>
        <Route exact path="/createPost">
          <CreatePost />
        </Route>
        <Route exact path ="/post/:id">
           <Post onClick={this.card}/>
        </Route>
        
      </div>
    </BrowserRouter>

    
    )
  
  
 } 

}
export default App;
