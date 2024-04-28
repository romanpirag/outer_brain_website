import React from "react"
export class TopLinks extends React.Component {
  render() {
    return (
      <>
        <div className="link-container">
          <a className="link-button" href="#home">
            HOME
          </a>
          <a className="link-button" href="#blood">
            BLOOD&nbsp;TYPERS
          </a>
          <a className="link-button" href="#guilt">
            GUILT
          </a>
          <a className="link-button" href="#organ">
            ORGAN&nbsp;QUARTER
          </a>
          <a className="link-button" href="#team">
            TEAM
          </a>
          {/* <a className="link-button" href="/presskit">
            PRESS&nbsp;KIT
          </a> */}
        </div>
        <div className="right-side-links">
          <a
            className="discord-link"
            href="https://discord.outerbrainstudios.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-discord" />
          </a>
          <a
            className="steam-link"
            href="https://store.steampowered.com/developer/outerbrain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-steam-square" />
          </a>
          <a
            className="twitter-link"
            href="https://twitter.com/OuterBrainGames"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter-square" />
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
