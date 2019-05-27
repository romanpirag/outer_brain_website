import React from 'react';
import './App.css';
import HomePage from "./Components/HomePage.js"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="link-container">
          <a className="link-button" href="#home-link">
            HOME
          </a>
          <a className="link-button" href="#guilt-link">
            GUILT
          </a>
          <a className="link-button" href="#organ-link">
            ORGAN QUARTER
          </a>
          <a className="link-button" href="#team-link">
            TEAM
          </a>
        </div>
        <section className="right-side-links">
          <a
            className="steam-link"
            href="https://store.steampowered.com/search/?developer=Outer%20Brain%20Studios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-steam-square" />
          </a>
          <a
            className="facebook-link"
            href="https://www.facebook.com/outerbrain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-square" />
          </a>
        </section>
      </header>

      <main className="main">
        <HomePage />
      </main>

      <footer>
        <h1 className="copyright">
          {" "}
          &copy; Outer Brain all rights reserved 2019
        </h1>
      </footer>
    </div>
  )
}

export default App;

