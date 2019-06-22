import React, { Component } from 'react';
import './navbar.css';
import NavList from './nav-list'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      isTop: true
    }
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  render(){
    let ToggleOpenClose = [""];
    if(this.state.addClass) {
      ToggleOpenClose.push('menu-opened');
    }
    return (
        <header id="navbar" className={(this.state.isTop ? 'up' : 'scrolled') + [ToggleOpenClose.join(' ')] }>
        <div className="burger-container" onClick={this.toggle.bind(this)}>
          <div className="burger" >
            <div className="bar topBar">
            </div>
            <div className="bar btmBar">
            </div>
          </div>
        </div>
        <div className="nav-menu">
        <NavList/>
        </div>
        <div className="phone-menu">
        <ul>
          <li><a href="#hero" onClick={this.toggle.bind(this)}>Home</a></li>
          <li><a href="#about" onClick={this.toggle.bind(this)}>About</a></li>
          <li><a href="#content" onClick={this.toggle.bind(this)}>Portfolio</a></li>
        </ul>
        </div>
        
  
      </header>
      
    );
  }
}



export default Navbar;
