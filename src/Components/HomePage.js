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

        <section className="section parallax organ-bkg"/>
        <section className="section parallax organ-bkg222"/>
          <OrganPage/>
        
        <section className="section parallax team-bkg"/>
          <TeamPage />

      </main>
    </div>
  )
}

export default HomePage
