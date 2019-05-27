import React from "react"
import TeamPage from "./TeamPage"
import OrganPage from "./OrganPage"
import GuiltPage from "./GuiltPage"
import Welcome from "./Welcome"

function HomePage() {
  return (
    <div>
      <main className="wrapper">
        <section className="section parallax bg1">
          <Welcome />
        </section>
        <GuiltPage />
        <div id="organ-link" />
        <section className="section parallax organ-bkg" />
        <OrganPage />
        <section className="section parallax bg4">
          <TeamPage />
        </section>
      </main>
    </div>
  )
}

export default HomePage
