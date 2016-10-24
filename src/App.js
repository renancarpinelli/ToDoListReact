import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SerchField from './components/SearchField';
import Menu from './components/Menu';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        { this.props.children }	
      </div>
    );
  }
}

export default App;
