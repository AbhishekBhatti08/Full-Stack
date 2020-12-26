import logo from './logo.svg';
import Navbar from '../src/components/Navbar.js';
import React from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact />
      </Switch>

      </Router>
      
    </>
  );
}

export default App;
