import React from "react"
import { Slide } from "react-slideshow-image"

const slideImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51HCOS-rUML.jpg",
  "http://www.senyphine.com/2013/images/gothic%20art/image-ga.jpg",
  "https://www.wallpaperup.com/uploads/wallpapers/2015/05/21/694861/486847ed7fb0c858ee8928947ac2d0f9-700.jpg",
  "https://www.wallpaperup.com/uploads/wallpapers/2015/05/22/695179/6109858ea9368ba02e22938509894b7c-700.jpg"
]

const properties = {
//   duration: 3,
//   transitionDuration: 800,
  infinite: true,
  indicators: false,
  arrows: true
}

const SlideShow = () => {
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[0]})` }} />
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[1]})` }} />
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[2]})` }} />
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[3]})` }} />
      </div>
    </Slide>
  )
}

export default SlideShow
