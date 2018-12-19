import React, { Component } from "react";
import resume from "../Images/Jemila Al-Ghani (2).png";
import "./Resume.scss";
import Final from "../Images/Jemila Al-Ghani (3).pdf";
import withContext from "../Context_HOC";

class Resume extends Component {
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
      <a href={Final} download>
        <img
          className={
            this.props.context.unmount
              ? "unmount resume-img"
              : this.state.mount
              ? "mount resume-img"
              : "resume-img"
          }
          src={resume}
          alt=""
        />
      </a>
    );
  }
}
export default withContext(Resume);
