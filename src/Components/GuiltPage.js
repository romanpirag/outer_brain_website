import React from "react";
import "./GuiltPage.css";
// import Slideshow from "./Slideshow"

function GuiltPage() {
  return (
    <>
      <div className="guilt-anchor" id="guilt" />
      <section className="guilt-title black-border">
        <img
          name="GuiltPage"
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

      <section className="guilt-content black-border">
        <div className="content-container">
          <iframe
            className="trailer"
            title="Guilt Trailer"
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

          <a className="content-container" href="/assets/EarlyAccessRoadmap.png">
            <img
              className="game-gif"
              src="/assets/EarlyAccessRoadmap.png"
              alt="Guilt Roadmap"
            />
          </a>

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

export default GuiltPage;
