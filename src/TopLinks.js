import React from "react"
export class TopLinks extends React.Component {
  render() {
    return (
      <>
        <div className="link-container">
          <a className="link-button" href="#home">
            HOME
          </a>
          <a className="link-button" href="#guilt">
            GUILT
          </a>
          <a className="link-button" href="#organ">
            ORGAN QUARTER
          </a>
          <a className="link-button" href="#team">
            TEAM
          </a>
        </div>
        <div className="right-side-links">
          <a
            className="steam-link"
            href="https://store.steampowered.com/search/?developer=Outer%20Brain%20Studios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-steam-square" />
          </a>
          <a
            className="facebook-link"
            href="https://www.facebook.com/outerbrain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square" />
          </a>
        </div>
      </>
    )
  }
}
