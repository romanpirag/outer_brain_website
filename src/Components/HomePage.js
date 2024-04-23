import React from "react"
import TeamPage from "./TeamPage"
import BloodPage from "./BloodPage"
import OrganPage from "./OrganPage"
import GuiltPage from "./GuiltPage"
import Welcome from "./Welcome"

function HomePage() {
  return (
    <>
      <Welcome />

      <BloodPage />

      <GuiltPage />

      <OrganPage />

      <TeamPage />
    </>
  )
}



export default HomePage
