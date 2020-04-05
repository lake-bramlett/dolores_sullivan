import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../images/logo.png';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeLink: ''
    };
  }

  
  render() {
   const activateLink = (link) => {
      this.setState({ activeLink: link })
    } 
    return (
      <div className="header">
        <Link to="/" onClick={ () => { activateLink('home') } }><img src={logo} alt="Delores Sullivan" /></Link>
        <Link to="/" onClick={ () => { activateLink('home') } } className={`nav-btn ${this.state.activeLink == 'home' ? 'link-active': ''}`}>Home</Link>
        <Link to="/about" onClick={ () => { activateLink('about') } } className={`nav-btn ${this.state.activeLink == 'about' ? 'link-active': ''}`}>About</Link>
        <Link to="/classes" onClick={ () => { activateLink('classes') } } className={`nav-btn ${this.state.activeLink == 'classes' ? 'link-active': ''}`}>Classes</Link>
        <Link to="/Appointments" onClick={ () => { activateLink('appointments') } } className={`nav-btn ${this.state.activeLink == 'appointments' ? 'link-active': ''}`}>Appointments</Link>
      </div>
    )
  }
}
