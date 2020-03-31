import React, { Component } from 'react';
import '../App.css';
import './contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addClass: false,
        }
      }
      toggle() {
        this.setState({addClass: !this.state.addClass});
      }
    
  render(){
    let ToggleActive = [""];
    if(this.state.addClass) {
      ToggleActive.push('active');
    }

    return (
        <div className="contact-area">
        <div className="contact">
          <main>
            <div className={"card-section " + [ToggleActive.join(' ')] }>
              <div className="content">
                <img src={require("../assets/profile.jpeg")} alt="Profile Image"/>
                <aside>
                  <h1>Oliver Santiago</h1>
                  <p>Everyone is a self-starter, but what did they actually finished? View mine!</p>
                </aside>
      
                <button className={ToggleActive.join(' ')} onClick={this.toggle.bind(this)}>
                  <span>Get In Touch</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path> </g> </svg>
                </button>
              </div>
              <div className={"title " + [ToggleActive.join(' ')] }>
                <p>Get In Touch</p>
              </div>
            </div>
          </main>
      
          <nav className={ToggleActive.join(' ')}>
            <a href="mailto:oliver.santiago1005@gmail.com" aria-label="link" className="gmail">
              <div className="icon">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" fill-rule="evenodd"/></svg>
              </div>
              <div className="content">
                <h1>Email</h1>
                <span>oliveratwork08@gmail.com</span>
              </div>
            </a>
      
            <a href="https://github.com/olsantiago" target="_blank" rel="noopener noreferrer" aria-label="link"  className="github">
              <div className="icon">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              </div>
              <div className="content">
                <h1>Github</h1>
                <span>olsantiago</span>
              </div>
            </a>
      
            <a href="https://www.linkedin.com/in/oliver-santiago-699474119/" target="_blank" rel="noopener noreferrer" aria-label="link" className="linkedin">
              <div className="icon">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
              </div>
              <div className="content">
                <h1>LinkedIn</h1>
                <span>oliver-santiago-699474119</span>
              </div>
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Contact;
