import React from "react"
import TeamContainer from "./TeamContainer"
import PhotoCarousel from "./PhotoCarousel"


function HomePage() {
  return (
    <div>
      <main class="wrapper">
        <section className="section parallax bg1">
          <h1 className="main-headline">Welcome to Outer Brain</h1>
        </section>
        <div>
          <PhotoCarousel />
        </div>
        <section class="section static">
          <h1>The Outer Brain Team</h1>
        </section>
        <section class="section parallax bg2">
          <h1>Reviews</h1>
        </section>
        <section class="section static">
          <h1>MORE INFO</h1>
        </section>
        <section class="section parallax bg3">
          <h1>MORE INFO</h1>
        </section>
      </main>
    </div>
  )
}

export default HomePage

