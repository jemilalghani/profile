import React, { Component } from "react";
import axios from "axios";
import withContext from "../Context_HOC";
import "./Contact.scss";

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
      <form
        onSubmit={() => this.sendEmail()}
        className={
          this.props.context.unmount
            ? "unmount contact-me"
            : this.state.mount
            ? "mount contact-me"
            : "contact-me"
        }
      >
        <h2>Contact</h2>
        {/* <p>Name</p> */}
        <input
          onChange={e => this.handleChange("name", e.target.value)}
          placeholder="Name*"
          required
        />
        {/* <p>Email Address</p> */}
        <input
          onChange={e => this.handleChange("email", e.target.value)}
          placeholder="Email Address*"
          required
        />

        {/* <p>Subject</p> */}
        <input
          onChange={e => this.handleChange("subject", e.target.value)}
          placeholder="Subject"
        />
        <textarea
          cols="49"
          rows="5"
          onChange={e => this.handleChange("body", e.target.value)}
          required
          placeholder="Message*"
        />
        <input className="send-button" type="submit" value="Send" />
      </form>
    );
  }
}
export default withContext(Contact);
