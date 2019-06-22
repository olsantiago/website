import React, { Component } from 'react';
import '../App.css';
import './about.css';



class About extends React.Component {
  state = {
    ItemView: false,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const item = document.getElementById('ct');
      const posTop = item.getBoundingClientRect().top;
      const ItemView = (posTop - windowHeight) < 0;
      
      if(ItemView !== this.state.ItemView){
        this.setState({ ItemView })
      }



    });
  }
  render(){

    return (
        <section id="about" className="about">   
        <div id="ct" className={this.state.ItemView ? 'active' : 'hidden'}>
          <div>
          <span>About Me</span>
          </div>
          <blockquote className={this.state.ItemView ? 'active' : 'hidden'}>
            <p>&ldquo;I am a Developer, my focus is on Web developent but I am not limited on learning, whether it will be a Software or Application.
                    Because what motivates me is having the opportunity to use different programming languages and frameworks.
                    I push myself to find the best solutions and once I found it I tend to find a lot of ways to improve it, not just to clean it up but to be able to reuse it and improve how it functions.
                    
                    My work is not always about excessive design and effects, I focus more on fast loading time and efficient websites, accommodating my clients vision, needs and timeline.&rdquo;</p>
          </blockquote>
        </div>
        </section>
    );
  }
}

export default About;
