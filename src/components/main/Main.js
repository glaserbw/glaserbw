import React, { Component } from 'react';
import '../../App.css';

// imports

class Main extends Component {
  render() {
    return (

         <div className="main">
            <div className="main-container">
              <section class="main__section main__profile">
                <h1>Brian</h1>
                <h1>Glaser</h1>
                <h2 class="main__subtitle h2-padding-exception">Full-Stack Developer | Solutions Engineer | Digital Strategy</h2>
              </section>

              <section className="main__section">
                <h2>About Me</h2>
                <p>I'm a full-stack developer with a deep appreciation meaningful user communication</p>
                <br/>
                <p>After over 10+ years experience in the digital advertising space, I decided to refocus my career and chase a passion for web development. What started as hobby/side projects quickly evolved into a career pivot to software development. Having worked in a multiude of different roles across tech, I understand what it takes for cross-functional teams to be successful.</p>
                <br/>
                <p> When not coding/tinkering, you can find me in the mountains with my wife and Australian Cattle Dog.</p>
              </section>

              <section className="main__section">
                <h2 className="h2-padding-exception">Personal Projects</h2>
                <div className="project_container">
                  <div className="project_box">Stokey Bear Escape
                    <img src="#" alt="Photo of Stokey Bear Escape"></img>
                  </div>
                  <div className="project_box">Kainan</div>
                  <div className="project_box">Stalky Stocks</div>
                  <div className="project_box">Salt & Pepper Family</div>
                </div>
              </section>

              <section id="contact" className="main__section">
                <h2>Contact</h2>
                <div className="main__contact-info">
                  <div id="js-email" className="contact">glaserbw@gmail.com</div>
                  | 
                  <a href="" target="_blank">Resume</a>
                    | 
                    <a href="#" target="_blank">LinkedIn</a>
                </div>
              </section>
            </div>
          </div>
    
    );
  }
}

export default Main;