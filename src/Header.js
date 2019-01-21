import React, { Component } from "react";
import arrow from "./Images/play-button.svg";
import "./Header.scss";
import withContext from "./Context_HOC";
import linkarrow from "./Images/arrow-logo.svg";
import github from "./Images/github-logo.svg";
import linkedin from "./Images/linkedin-logo-button.svg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      dropMenu: ["all", "technologies", "projects"],
      dropMenuCurrent: "all",
      active: true,
      all: ["Project[pixelate.top]", "Project[airmoment.live]", "Technologies"],
      projects: ["pixelate.top", "airmoment.live"],
      technologies: ["Technologies"],
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
        if (el === "technologies") {
          return (
            <p
              key={index}
              onClick={() => {
                this.handleClick("dropMenuCurrent", el);
                this.props.context.startAni("selected", el);
                this.props.context.info("dropdown");
              }}
            >
              {el}
            </p>
          );
        } else {
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
      }
    });
    let links = this.state[this.state.dropMenuCurrent].map((el, index) => {
      return (
        <div className="Links">
          <p
            className="header-links"
            key={index}
            onClick={() => {
              this.props.context.info("dropdown");
              this.props.context.startAni("selected", el);
            }}
          >
            {el}
          </p>
          <img
            src={linkarrow}
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
      <div
        className={this.props.context.dropdown ? "transform Header" : "Header"}
      >
        <header className="Header-header">
          <h1
            onClick={() => {
              this.props.context.startAni("selected", "about");
              this.props.context.info("dropdown");
            }}
          >
            Jemila Al-Ghani
          </h1>
          <ul>
            <li
              onClick={() => {
                this.props.context.startAni("selected", "about");
                this.props.context.info("dropdown");
              }}
            >
              about
            </li>
            <li className="divider-header">|</li>
            <li
              onClick={() => {
                this.props.context.startAni("selected", "contact");
                this.props.context.info("dropdown");
              }}
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
