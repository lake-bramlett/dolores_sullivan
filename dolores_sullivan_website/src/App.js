import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import logo from './logo.svg';
import './css/App.css';
import Home from './components/Home.js'
import Profile from './components/Profile.js';
import Appointments from './components/Appointments.js';
import Classes from './components/Classes.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home /> } />
          <Route exact path="/about" render={() => <Profile /> } />
          <Route exact path="/appointments" render={() => <Appointments /> } />
          <Route exact path="/classes" render={() => <Classes /> } />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
