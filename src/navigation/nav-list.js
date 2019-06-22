import React, { Component } from 'react';

class NavList extends Component {
  render(){

    return (
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#content">Portfolio</a></li>
        </ul>
      
    );
  }
}

export default NavList;
