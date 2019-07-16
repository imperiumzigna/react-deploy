import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Escola de Javascript</b> meu deploy react! 😎
        </p>
        <a
          className="App-link"
          href="https://escoladejavascript.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar Artigo
        </a>
      </header>
    </div>
  );
}

export default App;
