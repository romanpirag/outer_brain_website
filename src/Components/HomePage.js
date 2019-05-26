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
        <section className="section parallax bg3" />
        <OrganPage />
        <section>
          <TeamPage />
        </section>
        <section className="section parallax bg4" />
      </main>
    </div>
  )
}

export default HomePage
