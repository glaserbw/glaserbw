import React, { Component } from 'react';
import '../../App.css';

// imports

class Main extends Component {
  render() {
    return (
      <section >
         <div className="main">
            <div className="main-container">
              <section class="main__section main__profile">
                <h1>Brian</h1>
                <h1>Glaser</h1>
                <h2 class="main__subtitle h2-padding-exception">Full-Stack Developer</h2>
              </section>

              <section className="main__section">
                <h2>About Me</h2>
                <p>info</p>
              </section>

              <section className="main__section">
                <h2 className="h2-padding-exception">Personal Projects</h2>
              </section>

              <section id="get-in-touch" className="main__section">
                <h2>Contact</h2>
                <div className="main__contact-info">
                  <div id="js-email" className="main__email">glaserbw@gmail.com</div>
                  | 
                  <a href="" target="_blank">Resume</a>
                    | 
                    <a href="#" target="_blank">LinkedIn</a>
                </div>
              </section>
            </div>
          </div>
      </section>
    );
  }
}

export default Main;