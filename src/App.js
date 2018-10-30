import React, { Component } from 'react';
import './App.css';

// imports
import Sidebar from './components/Sidebar';
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
