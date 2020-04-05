import React, { Component } from 'react';
import beach from './../images/beach.JPG';

export default class Home extends Component {

  render() {
    return(
      <div className="home">
        <img src={beach} alt="beach" />
      </div>
    );
  }

}
