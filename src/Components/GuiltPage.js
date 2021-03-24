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
          src="https://i.imgur.com/83EFGB4.png"
          alt="Guilt Logo"
        />

        <p className="game-description">
          Slash your way through a dark, ever-changing world in this new blend of co-op roguelike and shared-world adventure. Will you beg for forgiveness?
        </p>
      </section>

      <section className="guilt-content black-border">
        <div className="content-container">
          <iframe
            className="trailer"
            title="Guilt Trailer"
            src="https://www.youtube.com/embed/tlw18VR22QU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="840"
            height="480"
          />

          <iframe
            className="itch"
            title="itch"
            src="https://store.steampowered.com/widget/1047950/" frameborder="0" width="646" height="190"
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
  );
}

export default GuiltPage;
