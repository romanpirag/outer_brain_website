import React from "react"
import Slideshow from "./Slideshow"

function GuiltPage() {
  return (
    <div>
      {/* <section class="section static">
        <h1>GUILT</h1>
      </section> */}
      <section className="guilt-div">
        <section>
          <img
            className="guilt-logo"
            src="https://i.imgur.com/83EFGB4.png"
            alt="Guilt Logo"
          />
        </section>
        <section>
          <div>
            <p className="guilt-description">
              GUILT is a multiplayer third-person survival action RPG set in a
              gritty, dark fantasy world of bone and misery. Players will
              explore the seemingly endless Trail of Bones, fending off
              nightmarish threats and encountering other players at random.
              The game combines meaningful multiplayer interactions with deep
              roguelike gameplay into a deliciously dark cocktail of
              adventure, tension and emergent storytelling.
            </p>
          </div>
        </section>
        <section>
          <iframe
            className="guilt-trailer"
            title="Guilt Trailer"
            //   width="560"
            //   height="315"
            src="https://www.youtube.com/embed/ncmilTawjU8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </section>
        {/* <section className="slide-container">
          <Slideshow />
        </section> */}
      </section>
    </div>
  )
}

export default GuiltPage
