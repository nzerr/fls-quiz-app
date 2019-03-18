import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from 'fls-quiz-component';
import { quiz } from './quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Fête Le Savoir - Quiz
          </p>

        </header>
        <div className="App-content">
          <Quiz quiz={quiz}></Quiz>
        </div>
      </div>
    );
  }
}

export default App;
