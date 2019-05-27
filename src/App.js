import React from "react"
import "./App.css"
import HomePage from "./Components/HomePage.js"
import { TopLinks } from "./TopLinks"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopLinks />
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

export default App
