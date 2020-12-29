import logo from './logo.svg';
import Navbar from '../src/components/Navbar.js';
import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Pages/Home';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      </Router>
      
    </>
  );
}

export default App;
