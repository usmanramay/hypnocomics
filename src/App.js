import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Cover from './Components/Cover/Cover';
import { Router,Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Header/>
        <Cover/>
      </div>
     
    );
  }
}

export default App;
