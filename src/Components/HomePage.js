import React from "react"
import TeamPage from "./TeamPage"
import OrganPage from "./OrganPage"
import GuiltPage from "./GuiltPage"
import PhotoCarousel2 from "./PhotoCarousel2"
import SlideShow from "./Slideshow"

function HomePage() {
  return (
    <div>
      <main className="wrapper">
        <section className="section parallax bg1">
          <img
            className="outerbrain-logo"
            src="https://i.imgur.com/uiACHoF.png"
            alt="Brain Logo"
          />
        </section>

        <section>
          <h1 className="main-headline">Welcome to Outer Brain Studios</h1>
        </section>

        <section class="section static">
          <h1>GUILT</h1>
        </section>
        <div>
          <SlideShow />
        </div>

        <section className="section parallax bg2">
          <div>
            <GuiltPage />
          </div>
        </section>

        <section class="section static">
          <h1>ORGAN QUARTER</h1>
        </section>
        <div>
          <PhotoCarousel2 />
        </div>

        <div>
          <OrganPage />
        </div>

        <section className="section parallax bg3">
          <h3 className="page-text">ORGAN QUARTER</h3>
        </section>

        <section class="section static">
          <h1>OUTER BRAIN TEAM</h1>
        </section>

        <section className="section parallax bg4">
          <div>
            <TeamPage />
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
