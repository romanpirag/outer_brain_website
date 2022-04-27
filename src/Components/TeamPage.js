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
            <span className="name-highlight">Kory Powell</span> - Technomancer
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
            ♥ Hosting provided by <a class="foot-link" target="_blank" rel="noopener noreferrer" href="https://pages.github.com/">github</a>
            &nbsp;&copy; Outer Brain Studios all rights reserved
          </h5>
        </div>
      </section>
    </>
  )
}

export default TeamPage
