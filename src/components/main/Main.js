import React, { Component } from 'react';
import '../../App.css';

// imports
import stokeyswayhome from '../assets/stokeyswayhome.png';
import kainan from '../assets/kainan.png';
import stalkystocks from '../assets/kainan.png';

class Main extends Component {
  render() {
    return (

         <div className="main">
            <div className="main-container">
              <section class="main__section main__profile">
                <h1>Brian</h1>
                <h1>Glaser</h1>
                <h2 class="main__subtitle">Full-Stack Developer | Solutions Engineer | Digital Strategy</h2>
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
                <h2 >Personal Projects</h2>
                
                <div className="project__container">
                  <div className="project">
                    <div className="project__img-container">
                      <img src={stokeyswayhome} className="project__img--large"/>
                      <img src={stokeyswayhome}  className="project__img--tall"/>
                      <h3 className="project__img-title">racing game - stokey's way home</h3>
                    </div>
                    <div className="project__description">
                      <p className= "project__item">Technologies: JavaScript, HTML5 Canvas</p>
                      <p className= "project__item">This is a simple top-down 'racing' where the player navigates their car home through rush hour traffic on the I-5. No winning, rather see how far you make it before the traffic becomes too much.. </p>
                      <div className="project__buttons project__item">
                        <div className="project__button">
                          <a href="https://glaserbw.github.io/stokeyswayhome/" target="_blank"><p className="project__button-text">Live Demo</p></a>
                        </div>
                        <div className="project__button">
                          <a href="https://github.com/glaserbw/stokeyswayhome" target="_blank"><p className="project__button-text">Source Code</p></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="project">
                    <div className="project__img-container">
                      <img src={kainan} className="project__img--large"/>
                      <img src={kainan}  className="project__img--tall"/>
                      <h3 className="project__img-title">racing game - stokey's way home</h3>
                    </div>
                    <div className="project__description">
                      <p className= "project__item">Technologies: JavaScript, HTML5 Canvas</p>
                      <p className= "project__item">This is a simple top-down 'racing' where the player navigates their car home through rush hour traffic on the I-5. No winning, rather see how far you make it before the traffic becomes too much.. </p>
                      <div className="project__buttons project__item">
                        <div className="project__button">
                          <a href="https://glaserbw.github.io/stokeyswayhome/" target="_blank"><p className="project__button-text">Live Demo</p></a>
                        </div>
                        <div className="project__button">
                          <a href="https://github.com/glaserbw/stokeyswayhome" target="_blank"><p className="project__button-text">Source Code</p></a>
                        </div>
                      </div>
                    </div>
                  </div>

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