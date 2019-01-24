import React, { Component } from "react";
import "./Home.scss";
import withContext from "../Context_HOC";
import me from "../Images/ME.jpg";
import arrow from "../Images/arrow-logo.svg";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      mount: false
    };
  }
  componentDidMount() {
    this.setState({ mount: true });
  }
  render() {
    return (
      <div
        className={
          this.props.context.unmount
            ? "unmount contains"
            : this.state.mount
            ? "mount contains"
            : "contains"
        }
      >
        <div className="home">
          <img src={me} alt="" />
          <div className="home-info">
            <h1>WELCOME!</h1>
            <p className="about-me">
              I'm Jemila - a passionate Full Stack Web Developer, Oaklander, and
              doggo lover.
            </p>
            <p className="about-me">
              I work with ReactJS, CSS, SASS, PostgreSQL, and Express.js to name
              a few. Currently, I'm working on wireframing and prototyping
              upcoming projects with Adobe XD.{" "}
            </p>
            <p className="about-me">
              Outside of coding, I'm into watching gameplays, hiking, traveling,
              baking vegan treats, and drinking almond milk matcha lattes 🍵 !{" "}
            </p>
            <div className="home-button">
              <button>
                <a href="https://www.linkedin.com/in/jemilaalghani/">
                  LINKEDIN
                </a>
              </button>
              <button>
                <a href="https://github.com/jemilalghani/">GITHUB</a>
              </button>
            </div>
          </div>
        </div>
        <footer
          className={this.props.context.dropdown ? "back" : "back-gone"}
          onClick={() => this.props.context.info("dropdown")}
        >
          <img
            src={arrow}
            width="30"
            alt="back"
            style={{ transform: "rotate(180deg)" }}
          />
        </footer>
      </div>
    );
  }
}
export default withContext(Home);
