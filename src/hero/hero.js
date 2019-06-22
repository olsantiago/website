import React, { Component } from 'react';
import '../App.css';
import './hero.css';
import Contact from '../contact/contact'

class Hero extends Component {
  constructor(){
    super();
    this.state={
      opacity: 1,
      translateY: 0,
    };
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      const sec = document.getElementById('hero').offsetHeight;
      const nav = document.getElementById('navbar').offsetHeight;
      const hide = (1 - scroll / (sec - nav));
      const up = (scroll * 0.5)
      if(scroll < sec){
        this.setState({opacity:hide});
        this.setState({translateY:up});
      }
    })
  }

  render(){
    const opacity ={
        opacity: this.state.opacity,
    }
    const val = ("translateY(-" + this.state.translateY + "px)")
    const trans = {
        transform: val,
    }
    return (
      <section id="hero" className="hero" style={opacity}>
        <div className='stars'></div>
          <div className='stars2'></div>
          <div className='stars3'></div>
	      <div className="container" style={trans}>
          <div className="row">
            <Contact/>
          </div>
	      </div>
	    </section>
    );
  }
}

export default Hero;
