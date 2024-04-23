import React from "react"

import "./Welcome.css"

function Welcome() {
  return (
    <section className="welcome-title black-border">
      <div className="home-anchor" id="home" />
      <div id="home" className="welcome-div pulse">
        <img
          className="outerbrain-logo fade-in-element logo"
          src="https://i.imgur.com/uiACHoF.png"
          alt="Brain Logo"
        />
      </div>

      <h1 className="welcome">Welcome to Outer Brain Studios</h1>
    </section>
  )
}

export default Welcome
