import React from "react"
import PhotoCarousel from "./PhotoCarousel"

function GuiltPage() {
  return (
    <div>
      <section>
        <div>
          <PhotoCarousel />
        </div>
      </section>
      <section>
        <div>
          <h3 className="guilt-text">[Guilt Content Goes Here]</h3>
        </div>
      </section>
    </div>
  )
}

export default GuiltPage
