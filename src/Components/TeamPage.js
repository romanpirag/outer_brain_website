import React from "react"
import "./TeamPage.css"

function TeamPage() {
  return (
    <>
      <section className="team-title">
        <div className="team-anchor" id="team" />

        <h2 className="team">Outer Brain Team</h2>

        <div className="team-container">
          <h4 className="team-member">
            <span className="name-highlight">Dmitry Pirag</span> - Studio director, lead artist, lead programmer
          </h4>

          <h4 className="team-member">
            <span className="name-highlight">Kory Powell</span> - Chief technology officer, designer
          </h4>

          <h4 className="team-member">
            <span className="name-highlight">Alex Shedlock</span> - Narrative designer, lead writer
          </h4>

          <h4 className="team-member">
            <span className="name-highlight">Anadale</span> - Composer, designer
          </h4>

          <h5 className="copyright">
            {" "}
            Website maintained by Mark Rothberg ♥ Hosting provided by <a class="foot-link" target="_blank" rel="noopener noreferrer" href="https://pages.github.com/">github</a>
            &nbsp;&copy; Outer Brain Studios all rights reserved
          </h5>
        </div>
      </section>
    </>
  )
}

export default TeamPage
