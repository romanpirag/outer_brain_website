import React from "react"
import PhotoCarousel2 from "./PhotoCarousel2"


function OrganPage() {
  return (
    <div className="organ-div">
     
      <section className="logo-background">
        <img
          className="organ-logo"
          src="https://i.imgur.com/KcKkqAE.png"
          alt="Organ Logo"
        />
      </section>
      <section>
        <div>
          <p className="organ-description">
            Organ Quarter is a VR survival horror game built from the
            ground-up for hand-tracked virtual reality. Explore labyrinthine
            environments, engage in tense combat, carefully manage your
            resources and solve horrifying puzzles in this homage to the slow,
            methodical survival horror experiences of the '90s.
          </p>
        </div>
      </section>
      <section>
        <iframe
          className="organ-trailer"
          title="Guilt Trailer"
          src="https://www.youtube.com/embed/Io9E-P2RkUg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </section>
      {/* <section>
          <PhotoCarousel2/>
      </section> */}
    </div>
  )
}

export default OrganPage
