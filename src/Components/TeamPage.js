import React from "react"
import "./TeamPage.css"

function TeamPage() {
  return (
    <>
      <section className="team-title">
        <div className="team-anchor" id="team" />

        <h2>Outer Brain Team</h2>

        <div className="team-container">
          <h4 className="team-member">
            <span className="name-highlight">Dmitry Pirag</span> - Lead
            developer and artist
          </h4>

          <h4 className="team-member">
            <span className="name-highlight"> Kory Powell </span> - Programmer
            and designer
          </h4>

          <h4 className="team-member">
            <span className="name-highlight">Alex Shedlock</span> - Writing,
            narrative design and PR
          </h4>

          <h4 className="team-member">
            <span className="name-highlight">Anadale</span> - Composer and
            designer
          </h4>

          <h5 className="copyright">
            {" "}
            &copy; Outer Brain all rights reserved 2019
          </h5>
        </div>
      </section>
    </>
  )
}

export default TeamPage
