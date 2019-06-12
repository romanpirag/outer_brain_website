import React from "react"
import "./GuiltPage.css"
// import Slideshow from "./Slideshow"

function GuiltPage() {
  return (
    <>
      <div className="guilt-anchor" id="guilt" />
      <section className="guilt-title black-border">
        <img
          name="GuiltPage"
          className="guilt-logo logo"
          src="https://i.imgur.com/83EFGB4.png"
          alt="Guilt Logo"
        />

        <p className="game-description">
          GUILT is a multiplayer third-person survival action RPG set in a
          gritty, dark fantasy world of bone and misery. Players will explore
          the seemingly endless Trail of Bones, fending off nightmarish
          threats and encountering other players at random. The game combines
          meaningful multiplayer interactions with deep roguelike gameplay
          into a deliciously dark cocktail of adventure, tension and emergent
          storytelling.
        </p>
      </section>

      <section className="guilt-content black-border">
        <div className="content-container">
          <iframe
            className="trailer"
            title="Guilt Trailer"
            src="https://www.youtube.com/embed/ncmilTawjU8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="840"
            height="480"
          />

          <iframe
            className="itch"
            title="itch"
            frameBorder="0"
            src="https://itch.io/embed/415443?border_width=5&amp;bg_color=953445&amp;fg_color=fefefa&amp;link_color=d74439&amp;border_color=000000"
            width="840"
            height="175"
          />

          <img
            className="game-gif"
            src="https://ksr-ugc.imgix.net/assets/024/978/047/24748a9c5016c4676363fb9c1577cbb6_original.gif?ixlib=rb-2.0.0&w=680&fit=max&v=1556735024&auto=format&gif-q=50&q=92&s=57c7f47f3ba855ad9e9bb03cb77a7f67"
            alt="Guilt Gif"
          />

          <img
            className="game-gif"
            src="https://ksr-ugc.imgix.net/assets/025/000/193/16fc42b3f8455a8b908cbc174fec1cec_original.gif?ixlib=rb-2.0.0&w=680&fit=max&v=1556868056&auto=format&gif-q=50&q=92&s=172729697af9e138bcf0974be6fbcb21"
            alt="Guilt Gif"
          />
        </div>
      </section>

      {/* <section className="slide-container">
          <Slideshow />
        </section> */}
    </>
  )
}

export default GuiltPage
