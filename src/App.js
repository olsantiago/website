import React, { Component } from 'react';
import './App.css';
import Navbar from './navigation/navbar';
import Hero from './hero/hero';
import Content from './content/content.js';
import About from './about/about.js';


class App extends Component {

  render(){

    return (
      <div className="relative">
        <div className='stars'></div>
          <div className='stars2'></div>
          <div className='stars3'></div>
        <Navbar />
        <Hero/>
        <About/>
        <Content/>
      </div>
    );
  }
}

export default App;
