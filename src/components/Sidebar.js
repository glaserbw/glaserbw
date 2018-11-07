import React, { Component } from 'react';
import '../App.css';
import brian from './assets/brian.jpg';


// imports

class Sidebar extends Component {
  render() {
    return (
		<div className="sidebar">
			<div className="sidebar__profile-container">
				<img className="sidebar__profile-pic" alt="brian" src={brian}></img>
				<p className="sidebar_name bwg">Brian</p>
				<p className="sidebar_name bwg">Glaser</p>
				<h2 className="main_subtitle h2-padding-exception sidebar__headline">Full-Stack Developer</h2>
			</div>
			<div className="nav-buttons">
				<div className="nav-buttons_button">
					<a href="https://github.com/glaserbw" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github nav-buttons__icon"></i>
						<p className="nav-buttons__link-text">GitHub</p>
					</a>
				</div>
				<div className="nav-buttons_button">
					<a href="https://www.linkedin.com/in/brian-w-glaser/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-linkedin nav-buttons__icon" target="_blank" rel="noopener noreferrer"></i>
						<p className="nav-buttons__link-text" target="_blank" rel="noopener noreferrer">LinkedIn</p>
					</a>
				</div>
				<div className="nav-buttons_button">
					<a href="#contact">
						<i className="fa fa-envelope-square nav-buttons__icon"></i>
						<p className="nav-buttons__link-text">Email</p>
					</a>
				</div>
				<div className="nav-buttons_button">
					<a href="https://drive.google.com/file/d/1VVIIjFAkX_FujXnweJYtU7BDht2LJ1Lj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
						<i className="fas fa-file-pdf nav-buttons__icon nav-buttons__icon--not-square"></i>
						<p className="nav-buttons__link-text">Resume</p>
					</a>
				</div>
			</div>
			<p className="scroll_alert">(scroll down)</p>
		</div>
    );
  }
}

export default Sidebar;