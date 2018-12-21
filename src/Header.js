import React, { Component } from "react";
import arrow from "./Images/play-button.svg";
import "./Header.scss";
// import moment from "moment";
import withContext from "./Context_HOC";
// import linkarrow from "./Images/right-arrow.svg";
import circle from "./Images/circular-shape-silhouette.svg";
import github from "./Images/github-logo.svg";
import linkedin from "./Images/linkedin-logo-button.svg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      dropMenu: ["all", "resume", "technical", "projects"],
      dropMenuCurrent: "all",
      active: true,
      all: [
        "Jemila Al-Ghani",
        "pixelate.top",
        "airmoment.live",
        "technical skills"
      ],
      projects: ["pixelate.top", "airmoment.live"],
      technical: ["technical skills"],
      resume: ["Jemila Al-Ghani"],
      mouse: false
    };
  }
  handleClick(key, e) {
    this.setState({ [key]: e });
  }
  toggle(key) {
    this.setState(prevState => {
      return { [key]: !prevState[key] };
    });
  }
  render() {
    let dropDown = this.state.dropMenu.map((el, index) => {
      if (el !== this.state.dropMenuCurrent) {
        return (
          <p
            key={index}
            onClick={() => {
              // this.props.context.updateInfo("selection", index);
              this.handleClick("dropMenuCurrent", el);
            }}
          >
            {el}
          </p>
        );
      }
    });
    let links = this.state[this.state.dropMenuCurrent].map((el, index) => {
      return (
        <div className="Links">
          <p
            className="header-links"
            key={index}
            onClick={() => this.props.context.startAni("selected", el)}
          >
            {el}
          </p>
          <img
            src={circle}
            alt=""
            className="circle"
            style={{
              filter: "contrast(200%)"
            }}
          />
        </div>
      );
    });
    return (
      <div className="Header">
        <header className="Header-header">
          <h1>Jemila Al-Ghani</h1>
          <ul>
            <li
              onClick={() => this.props.context.startAni("selected", "about")}
            >
              about
            </li>
            <li className="divider-header">|</li>
            <li
              onClick={() => this.props.context.startAni("selected", "contact")}
            >
              contact
            </li>
          </ul>
        </header>
        <div
          className={this.state.active ? "drop-menu" : "drop-menu-open"}
          onClick={() => this.toggle("active")}
        >
          <img src={arrow} alt="" width="8" />
          <p>{this.state.dropMenuCurrent}</p>
          {dropDown}
        </div>
        <div className="Header-results">{links}</div>
        <footer>
          {/* <div className="circle" /> */}
          <div>
            <a href="https://www.linkedin.com/in/jemilaalghani/">
              <img src={linkedin} alt="" width="25" />
            </a>
            <a href="https://github.com/jemilalghani/">
              <img src={github} alt="" width="25" />
            </a>
          </div>
          <p>© AlGHANI</p>
        </footer>
      </div>
    );
  }
}
export default withContext(Header);
