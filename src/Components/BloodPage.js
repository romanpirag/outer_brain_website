import React from "react";
import "./BloodPage.css";
// import Slideshow from "./Slideshow"

function BloodPage() {
  return (
    <>
      <div className="blood-anchor" id="blood" />
      <section className="blood-title black-border">
        <img
          name="BloodPage"
          className="guilt-logo logo"
          src="/assets/GuiltLogo.png"
          alt="Guilt Logo"
        />

        <center>
          <a className="link-button" href="/presskit">
            PRESS KIT
          </a>
        </center>

        <p className="game-description">
        Slash your way through dark, ever-changing lands in this new blend of roguelike and shared-world adventure. Create your adventurer and traverse the Trail of Bones: a perilous journey where all players' choices alter the twisted landscape. Will you beg for forgiveness?
        </p>
      </section>

      <section className="blood-content black-border">
        <div className="content-container">
          <iframe
            className="trailer"
            title="Blood Trailer"
            src="https://www.youtube.com/embed/iwP5YfrhT5I"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="840"
            height="480"
          />

          <iframe
            title="steam"
            src="https://store.steampowered.com/widget/1047950/" frameborder="0" width="646" height="190"
          />

          <img
            className="game-gif"
            src="/assets/Guilt1.gif"
            alt="Guilt Gif"
          />

          <img
            className="game-gif"
            src="/assets/Guilt2.gif"
            alt="Guilt Gif"
          />
        </div>
      </section>

      {/* <section className="slide-container">
          <Slideshow />
        </section> */}
    </>
  );
}

export default BloodPage;
