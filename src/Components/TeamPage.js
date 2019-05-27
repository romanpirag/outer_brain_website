import React from "react"

function TeamPage() {
  return (
    <div className="team-page">
      <div className="team-anchor" id="team-link" />
      <section class="section static">
        <h1>The Outer Brain Team</h1>
      </section>
      <section className="team-container">
        <div>
          <img
            alt="Dmitry"
            src="https://ksr-ugc.imgix.net/assets/024/978/819/61e0cbae2c2cf548d1b9a62dc8515ab2_original.png?ixlib=rb-2.0.0&w=680&fit=max&v=1556738330&auto=format&gif-q=50&lossless=true&s=81284b847d33da970ca7d9b81656d061"
          />
          <h3 className="team-member">
            <span className="name-highlight">Dmitry Pirag</span> - Lead
            developer and artist
          </h3>
        </div>
        <div>
          <img
            alt="Kory"
            src="https://ksr-ugc.imgix.net/assets/024/978/831/b0486a7cfbd1d6cc088d1a49580da75a_original.png?ixlib=rb-2.0.0&w=680&fit=max&v=1556738357&auto=format&gif-q=50&lossless=true&s=d5d9976ea772b8fda1168a228619b02b"
          />
          <h3 className="team-member">
            <span className="name-highlight"> Kory Powell </span> - Programmer
            and designer
          </h3>
        </div>
        <div>
          <img
            alt="Alex"
            src="https://ksr-ugc.imgix.net/assets/024/978/835/65c5a8dc48fc3ac913ad1289454fd72a_original.png?ixlib=rb-2.0.0&w=680&fit=max&v=1556738370&auto=format&gif-q=50&lossless=true&s=b15b16e0f875463e362aabd0e8564cc8"
          />
          <h3 className="team-member">
            <span className="name-highlight">Alex Shedlock</span> - Writing,
            narrative design and PR
          </h3>
        </div>
        <div>
          <img
            alt="Roma"
            src="https://ksr-ugc.imgix.net/assets/024/978/849/32790f3863b18f2775a6e638f473391e_original.png?ixlib=rb-2.0.0&w=680&fit=max&v=1556738459&auto=format&gif-q=50&lossless=true&s=7d53ff8a2b793828eaf74a9c3f8acfd3"
          />
          <h3 className="team-member">
            <span className="name-highlight">Anadale</span> - Composer and
            designer
          </h3>
        </div>
      </section>
    </div>
  )
}

export default TeamPage
