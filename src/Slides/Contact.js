import React, { Component } from "react";
import axios from "axios";
import withContext from "../Context_HOC";
import "./Contact.scss";
import arrow from "../Images/arrow-logo.svg";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      subject: "",
      body: "",
      unmount: false,
      mount: false
    };
  }
  sendEmail() {
    axios
      .post("/api/email", {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        body: this.state.body
      })
      .then(() => {
        alert("Email Sent");
      });
  }
  handleChange(key, e) {
    this.setState({ [key]: e });
  }
  componentDidMount() {
    this.setState({ mount: true });
  }

  render() {
    console.log(this.props.context);
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
        <form onSubmit={() => this.sendEmail()} className="contact-me">
          <h2>Have any questions or comments? </h2>
          {/* <p>Name</p> */}
          <input
            onChange={e => this.handleChange("name", e.target.value)}
            placeholder=" Name (first, last)*"
            required
          />
          {/* <p>Email Address</p> */}
          <input
            onChange={e => this.handleChange("email", e.target.value)}
            placeholder=" Email Address*"
            required
          />

          {/* <p>Subject</p> */}
          <input
            onChange={e => this.handleChange("subject", e.target.value)}
            placeholder=" Subject"
          />
          <textarea
            // cols="49"
            // rows="5"
            onChange={e => this.handleChange("body", e.target.value)}
            required
            placeholder=" Message*"
          />
          <input className="send-button" type="submit" value="Send" />
        </form>
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
export default withContext(Contact);
