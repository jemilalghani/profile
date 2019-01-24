import React, { Component } from "react";
import "./Header.scss";
import withContext from "./Context_HOC";
import github from "./Images/github-logo.svg";
import linkedin from "./Images/linkedin-logo-button.svg";
import mail from "./Images/letter.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      projects: ["airmoment.live", "pixelate.top"]
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
    let links = this.state.projects.map((el, index) => {
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
        </header>
        <div className="Header-results">
          <p
            className="header-p"
            onClick={() => {
              this.props.context.startAni("selected", "about");
              this.props.context.info("dropdown");
            }}
          >
            ABOUT
          </p>
          <div
            className="addition-links"
            onClick={() => this.toggle("viewAll", true)}
          >
            <p className="addition-p">PROJECTS</p>
            <span className="addition">+</span>
          </div>
          <div className={this.state.viewAll ? "linkShow" : "linksToTrans"}>
            {links}
          </div>
          <p
            className="header-p"
            onClick={() => {
              this.props.context.startAni("selected", "Technologies");
              this.props.context.info("dropdown");
            }}
          >
            TECHNOLOGIES
          </p>
          <p
            className="header-p"
            onClick={() => {
              this.props.context.startAni("selected", "contact");
              this.props.context.info("dropdown");
            }}
          >
            CONTACT
          </p>
        </div>

        <div className="footer-header">
          <a href="https://www.linkedin.com/in/jemilaalghani/">
            <img src={linkedin} alt="" width="15" />
          </a>
          <a href="https://github.com/jemilalghani/">
            <img src={github} alt="" width="15" />
          </a>
          <a href="mailto:jemilakibibialghani@gmail.com">
            <img src={mail} alt="" width="16" />
          </a>
        </div>
      </div>
    );
  }
}
export default withContext(Header);
