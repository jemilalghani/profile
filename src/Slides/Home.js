import React, { Component } from "react";
import "./Home.scss";
import withContext from "../Context_HOC";
import me from "../Images/IMG_1125.jpeg";
import book from "../Images/open-magazine.svg";
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
          <img
            src={me}
            alt=""
            style={{ borderRadius: "3px", filter: "grayscale(100%)" }}
          />
          <h1>Jemila Kibibi Al-Ghani</h1>
          <p>
            I’m a passionate and inquisitive Web Developer based in Oakland,
            California. I studied Mathematics at Wesleyan University, where I
            also started my web development journey. With my combined knowledge
            of mathematics and development, I am seeking a full-time development
            position.
          </p>
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
