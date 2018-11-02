import React, { Component } from 'react';
import '../App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import Brian_crop from './assets/Brian_crop.jpg';


// imports

class Sidebar extends Component {
  render() {
    return (
		<div class="sidebar">
			<div class="sidebar__profile-container">
				<img class="sidebar__profile-pic" src={Brian_crop}></img>
				<p class="sidebar_name">Brian</p>
				<p class="sidebar_name">Glaser</p>
				<h2 class="main_subtitle h2-padding-exception sidebar__headline">Full-Stack Developer</h2>
			</div>
			<div class="nav-buttons">
				<div class="nav-buttons_button">
					<a href="https://github.com/glaserbw" target="_blank">
						<i class="fab fa-github nav-buttons__icon"></i>
						<p class="nav-buttons__link-text">GitHub</p>
					</a>
				</div>
				<div class="nav-buttons_button">
					<a href="https://www.linkedin.com/in/brian-w-glaser/" target="_blank">
						<i class="fab fa-linkedin nav-buttons__icon" target="_blank"></i>
						<p class="nav-buttons__link-text" target="_blank">LinkedIn</p>
					</a>
				</div>
				<div class="nav-buttons_button">
					<ScrollableAnchor id={'contact'}><a href="#contact">
						<i class="fa fa-envelope-square nav-buttons__icon"></i>
						<p class="nav-buttons__link-text">Email</p>
					</a></ScrollableAnchor>
				</div>
				<div class="nav-buttons_button">
					<a href="https://drive.google.com/file/d/1VVIIjFAkX_FujXnweJYtU7BDht2LJ1Lj/view?usp=sharing" target="_blank">
						<i class="fas fa-file-pdf nav-buttons__icon nav-buttons__icon--not-square"></i>
						<p class="nav-buttons__link-text">Resume</p>
					</a>
				</div>
			</div>
		</div>
    );
  }
}

export default Sidebar;