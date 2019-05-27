import React from 'react';
import './App.css';
import HomePage from "./Components/HomePage.js"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="#organ-link">ORGAN QUARTER</a>
      </header>
      
      <main className="main">
        <HomePage />
      </main>
      <footer>Outer Brain Studios 2019</footer>
    </div>
  )
}

export default App;

