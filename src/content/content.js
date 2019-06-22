import React, { Component } from 'react';
import '../App.css';
import './content.css';
import Projects from './projects.json'



class Content extends Component {

  render(){

    return (
      <section id="content" className="content">
            <div className="container">
            <div className="row">
                <div className="col-12">
                  <h2>Projects and Websites</h2>
                </div>
              </div>
              </div>
          	<div className="card-container">
              

            {Projects.map((projDetail, index) => {
              let bg = {
                backgroundImage: projDetail.background,
              };
         
         return<div className={"item-" + projDetail.id}>
         <div href={projDetail.link} className="card">
           <div className="thumb" style={bg}></div>
           <article>
             <h1>{projDetail.title}</h1>
             <p>{projDetail.content}</p>
             <div className="links">
             <a href={projDetail.link} target="_blank" rel="noopener noreferrer">View Site</a>
             <a href={projDetail.code} className="code" target="_blank" rel="noopener noreferrer">View Code</a>
             </div>
           </article>
         </div>
       </div>
     })}
		

	</div>

      </section>
    );
  }
}

export default Content;
