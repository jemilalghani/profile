import React, { Component } from "react";
import arrow from "./Images/play-button.svg";
import "./Header.scss";
import moment from "moment";
import withContext from "./Context_HOC";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      dropMenu: ["all", "resume", "technical", "projects"],
      dropMenuCurrent: "all",
      active: false,
      all: [
        "Jemila Al-Ghani",
        "pixelate.top",
        "airmoment.live",
        "technical skills"
      ],
      projects: ["pixelate.top", "airmoment.live"],
      technical: ["techincal skills"],
      resume: ["Jemila Al-Ghani"]
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
        <p
          className="header-links"
          key={index}
          onClick={() => this.props.context.updateInfo("selected", el)}
        >
          {el}
        </p>
      );
    });
    return (
      <div className="Header">
        <header className="Header-header">
          <h1>Jemila Al-Ghani</h1>
          <ul>
            <li>about</li>
            <li className="divider-header">|</li>
            <li>contact</li>
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
          <div className="circle" />
          <p>{moment().format("YYYY-MM-DD")}</p>
        </footer>
      </div>
    );
  }
}
export default withContext(Header);
