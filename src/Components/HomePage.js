import React from "react"
import TeamPage from "./TeamPage"
import OrganPage from "./OrganPage"
import GuiltPage from "./GuiltPage"
import ContactPage from "./ContactPage"

function HomePage() {
  return (
    <div>
      <main className="wrapper">
        <section className="section parallax bg1">
          <h1 className="main-headline">Welcome to Outer Brain</h1>
        </section>
        <section class="section static">
          <h1>GUILT</h1>
        </section>
        <div>
          <GuiltPage />
        </div>
        <section className="section parallax bg2">
          <h2>[Guilt Content Goes Here]</h2>
        </section>
        <section class="section static">
          <h1>ORGAN QUARTER</h1>
        </section>
        <div>
          <OrganPage />
        </div>
        <section className="section parallax bg2">
          <h2>[Organ Quarter Content Goes Here]</h2>
        </section>
        <section class="section static">
          <h1>OUTER BRAIN TEAM</h1>
        </section>
        <section className="section parallax bg2">
          <div>
            <TeamPage />
          </div>
        </section>
        <section class="section static">
          <h1>CONTACT</h1>
        </section>
        <section className="section parallax bg3">
          <ContactPage/>
        </section>
      </main>
    </div>
  )
}

export default HomePage
