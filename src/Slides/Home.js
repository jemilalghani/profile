import React, { Component } from "react";
import "./Home.scss";
import withContext from "../Context_HOC";
import me from "../Images/IMG_7043.JPG";

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
            ? "unmount home"
            : this.state.mount
            ? "mount home"
            : "home"
        }
      >
        <img src={me} alt="" width="300" style={{ borderRadius: "3px" }} />
        <h1>Jemila Kibibi Al-Ghani</h1>
        <p>
          I’m a passionate and inquisitive Web Developer and UX Designer based
          in Oakland, California. I studied Mathematics at Wesleyan University,
          where I also started my web development journey. With my combined
          knowledge of mathematics and development, I am seeking a full-time
          Development position.
        </p>
      </div>
    );
  }
}
export default withContext(Home);
