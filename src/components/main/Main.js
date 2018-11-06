import React, { Component } from 'react';
import '../../App.css';

// imports
import stokeyswayhome from '../assets/stokeyswayhome.png';
import kainan from '../assets/kainan.png';
import stalkystocks from '../assets/stalkystocks.png';
import saltandpepperfam from '../assets/saltandpepperfam.png';

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
                      <p className= "project__item"><strong>Technologies</strong>: JavaScript, HTML5 Canvas</p>
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
                      <h3 className="project__img-title">website - kainan</h3>
                    </div>
                    <div className="project__description">
                      <p className= "project__item"><strong>Technologies</strong>: HTML/CSS, Node.js, Express.js, SQL, Zomato API</p>
                      <p className= "project__item">Kainan means "eatery" in Tagalog. This is a restaurant finder specifically geared for finding Filipino restaurants in a city. Find and save favorites, map ability coming soon. </p>
                      <div className="project__buttons project__item">
                        <div className="project__button">
                          <a href="https://github.com/glaserbw/kainan-app" target="_blank"><p className="project__button-text">Live Demo</p></a>
                        </div>
                        <div className="project__button">
                          <a href="https://kainan-app-bg.herokuapp.com/" target="_blank"><p className="project__button-text">Source Code</p></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="project">
                    <div className="project__img-container">
                      <img src={stalkystocks} className="project__img--large"/>
                      <img src={stalkystocks}  className="project__img--tall"/>
                      <h3 className="project__img-title">website - stalky stocks</h3>
                    </div>
                    <div className="project__description">
                      <p className= "project__item"><strong>Technologies</strong>: HTML/CSS, React, Materialize, Node.js, Express.js, MongoDB, Charts.js, IEX API</p>
                      <p className= "project__item">A group project with fellow developers, this full stack stock trading training app allows users to purchase stocks and monitor them using charts and updated in realtime using an API</p>
                      <div className="project__buttons project__item">
                        <div className="project__button">
                          <a href="https://stalklystocks-bzy.herokuapp.com/" target="_blank"><p className="project__button-text">Live Demo</p></a>
                        </div>
                        <div className="project__button">
                          <a href="https://github.com/glaserbw/mern-app-client" target="_blank"><p className="project__button-text">Source Code</p></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="project">
                    <div className="project__img-container">
                      <img src={saltandpepperfam} className="project__img--large"/>
                      <img src={saltandpepperfam}  className="project__img--tall"/>
                      <h3 className="project__img-title">website - salt & pepper family</h3>
                    </div>
                    <div className="project__description">
                      <p className= "project__item"><strong>Technologies</strong>: HTML/CSS, Materialize, Django, Python</p>
                      <p className= "project__item">A group project with fellow developers, this full stack stock trading training app allows users to purchase stocks and monitor them using charts and updated in realtime using an API</p>
                      <div className="project__buttons project__item">
                        <div className="project__button">
                          <a href="https://saltandpepperfam.herokuapp.com/" target="_blank"><p className="project__button-text">Live Demo</p></a>
                        </div>
                        <div className="project__button">
                          <a href="https://github.com/glaserbw/spf" target="_blank"><p className="project__button-text">Source Code</p></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <section id="contact" className="main__section">
                <h2>Contact</h2>
                <div className="main__contact-info">
                  <div id="contact" className="contact">glaserbw@gmail.com </div>
                  <a href="https://drive.google.com/file/d/1VVIIjFAkX_FujXnweJYtU7BDht2LJ1Lj/view?usp=sharing" target="_blank"> Resume</a>
                    <a href="https://www.linkedin.com/in/brian-w-glaser/" target="_blank"> LinkedIn</a>
                </div>
              </section>
            </div>
          </div>
    
    );
  }
}

export default Main;