import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      subject: "",
      body: ""
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
  render() {
    console.log(this.state);
    return (
      <form onSubmit={() => this.sendEmail()}>
        <p>Name</p>
        <input
          onChange={e => this.handleChange("name", e.target.value)}
          required
        />
        <p>Email Address</p>
        <input
          onChange={e => this.handleChange("email", e.target.value)}
          required
        />

        <p>Subject</p>
        <input
          onChange={e => this.handleChange("subject", e.target.value)}
          required
        />
        <p>Message</p>
        <input
          onChange={e => this.handleChange("body", e.target.value)}
          required
        />
        <input classNam="send-button" type="submit" value="Send" />
      </form>
    );
  }
}
