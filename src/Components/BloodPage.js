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
          src="/assets/BloodTypersLogo.png"
          alt="Guilt Logo"
        />

        <center>
          <a className="link-button" href="https://www.igdb.com/games/blood-typers/presskit">
            PRESS KIT
          </a>
        </center>

        <p className="game-description">
        TYPE TO KILL in this survival horror adventure. Alone or with friends, explore a sprawling cursed film studio as its horror movies bleed into reality. Choose from a roster of characters then plan your escape from this bloody homage to old school horror. But remember... death is just a typo away.
        </p>
      </section>

      <section className="blood-content black-border">
        <div className="content-container">
          <iframe
            className="trailer"
            title="Blood Trailer"
            src="https://www.youtube.com/embed/E23odOnMc-Q?si=AylPg0MLLue-9a2M"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="840"
            height="480"
          />
          
          <iframe
            title="steam"
            src="https://store.steampowered.com/widget/2790330/" frameborder="0" width="646" height="190"
          />
          

          <img
            className="game-gif"
            src="/assets/BloodTypersGif1.gif"
            alt="Guilt Gif"
          />

          <img
            className="game-gif"
            src="/assets/BloodTypersGif2.gif"
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
