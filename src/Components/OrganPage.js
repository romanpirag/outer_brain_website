import React from "react"
// import PhotoCarousel2 from "./PhotoCarousel2"

function OrganPage() {
  return (
    <div className="organ-div">
      <div className="organ-anchor" id="organ" />
      <section className="logo-background">
        <img
          className="organ-logo shake"
          src="https://i.imgur.com/LeR87lb.png"
          alt="Organ Logo"
        />
      </section>
      <section className="game-description-div">
        <p className="game-description">
          Organ Quarter is a VR survival horror game built from the ground-up
          for hand-tracked virtual reality. Explore labyrinthine environments,
          engage in tense combat, carefully manage your resources and solve
          horrifying puzzles in this homage to the slow, methodical survival
          horror experiences of the '90s.
        </p>
      </section>
      <section>
        <iframe
          className="organ-trailer"
          title="Guilt Trailer"
          src="https://www.youtube.com/embed/ZQYHSL2n4es"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>
      <h3 className="ost-title">Organ Quarter OST</h3>
      <section>
        <iframe
          className="organ-ost"
          title="Organ OST"
          //   style="border: 0; width: 400px; height: 472px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=2621556706/size=large/bgcol=000000/linkcol=0083ff/artwork=small/transparent=true/"
          seamless
        >
          <a href="http://anadale.bandcamp.com/album/organ-quarter-ost">
            Organ Quarter OST by Anadale
          </a>
        </iframe>
      </section>
      <section>
        <img
          className="guilt-gif"
          src="https://ksr-ugc.imgix.net/assets/015/423/410/c9d28b8d63f1611075db151ed186d27a_original.gif?ixlib=rb-2.0.0&w=680&fit=max&v=1486473216&auto=format&gif-q=50&q=92&s=b285f5f18727b867ecb2f3580eab619f"
          alt="Guilt Gif"
        />
      </section>
      <section>
        <img
          className="guilt-gif"
          src="https://ksr-ugc.imgix.net/assets/015/422/869/9a3ceff377f2d50b3077237f0ff4fa89_original.gif?ixlib=rb-2.0.0&w=680&fit=max&v=1486468879&auto=format&gif-q=50&q=92&s=9161b8ccee13f9271931448edc1d0648"
          alt="Guilt Gif"
        />
      </section>

      {/* <section>
        <img
          className="guilt-gif"
          src="https://ksr-ugc.imgix.net/assets/015/422/878/a912f22dd0c00d0547f761fa8a05548a_original.gif?ixlib=rb-2.0.0&w=680&fit=max&v=1486468974&auto=format&gif-q=50&q=92&s=92c8dd8abc120c44b9f532a12d54ef58"
          alt="Guilt Gif"
        />
      </section> */}
      {/* <section>
          <PhotoCarousel2/>
      </section> */}
    </div>
  )
}

export default OrganPage
