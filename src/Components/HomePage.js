import React from "react"
import TeamPage from "./TeamPage"
import OrganPage from "./OrganPage"
import GuiltPage from "./GuiltPage"
import Welcome from "./Welcome"

function HomePage() {
  return (
    <div>
      <main className="wrapper">
        <div id="home" />

        <section className="section parallax bg1">
          <Welcome />
        </section>

        <section className="section parallax guilt-bkg"/>
        <section className="section parallax guilt-bkg222" />
          <GuiltPage />

        <section className="section parallax organ-bkg">
        <OrganPage/>
        </section>
        
        <section className="section parallax bg4">
          <TeamPage />
        </section>
      </main>
    </div>
  )
}

export default HomePage
