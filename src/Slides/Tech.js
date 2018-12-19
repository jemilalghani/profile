import React, { Component } from "react";
import sass from "../Images/sass.png";
import postgresql from "../Images/postgresql.png";
import node from "../Images/node.png";
import html from "../Images/html.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import redux from "../Images/redux.png";
import react from "../Images/apps.png";
import withContext from "../Context_HOC";
import "./Tech.scss";

class Tech extends Component {
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
            ? "unmount tech"
            : this.state.mount
            ? "mount tech"
            : "tech"
        }
      >
        <div className="tech-box">
          <img className="tech-logo" src={react} alt="" />
          <p>React</p>
        </div>
        <div className="tech-box">
          <img className="tech-logo" src={js} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="tech-box">
          <img className="tech-logo" src={html} alt="" />
          <p>HTML</p>
        </div>
        <div className="tech-box">
          <img className="tech-logo" src={node} alt="" />
          <p>Node.js</p>
        </div>
        <div className="tech-box">
          <img className="tech-logo" src={postgresql} alt="" />
          <p>PostgreSQL</p>
        </div>
        <div className="tech-box">
          <img className="tech-logo" src={css} alt="" />
          <p>CSS</p>
        </div>
        <div className="tech-box">
          <img className="tech-logo" src={redux} alt="" />
          <p>Redux</p>
        </div>
        <div className="tech-box">
          <img className="tech-logo" src={sass} alt="" />
          <p>Sass</p>
        </div>
      </div>
    );
  }
}
export default withContext(Tech);
