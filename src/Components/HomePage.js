import React from "react"
import TeamPage from "./TeamPage"
import OrganPage from "./OrganPage"
import GuiltPage from "./GuiltPage"
import Welcome from "./Welcome"

function HomePage() {
  return (
    <>
      <Welcome />

      <GuiltPage />

      <OrganPage />

      {/* <TeamPage /> */}
    </>
  )
}

export default HomePage
