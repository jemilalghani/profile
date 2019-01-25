import React, { Component } from "react";
import Slider from "react-slick";
import host from "../Images/Host.png";
import register from "../Images/Register.png";
import review from "../Images/Review.png";
import moment from "../Images/Moment.png";
import withContext from "../Context_HOC";
import arrow from "../Images/menu.svg";
import filter from "../Images/FilterModal.png";

class Moment extends Component {
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
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
        <header
          className={this.props.context.dropdown ? "back" : "back-gone"}
          onClick={() => this.props.context.info("dropdown")}
        >
          <img
            src={arrow}
            width="25"
            alt="back"
            style={{ transform: "rotate(180deg)" }}
          />
        </header>
        <div className="pixelate">
          <Slider {...settings}>
            <div className="slider">
              <img className="slider" src={moment} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={review} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={register} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={host} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={filter} alt="" />
            </div>
          </Slider>
          <div className="info-header">
            <h1>airmoment.live</h1>
            <p className="label">E-COMMERCE </p>
            <p>
              A team project to create full stack Airbnb experience page clone
            </p>
            <p className="website-link" id="nores">
              <a href="https://airmoment.live/">live site</a>
            </p>
          </div>
          <div className="info">
            <p style={{ fontWeight: 600, marginBottom: "5px" }}>
              Technologies used
            </p>
            <p>
              React, CSS, Context API, Express, Express-Sessions, Massive,
              RESTful API's, PostgreSQL, Node, Digital Ocean, Nodemailer,
              Cloudinary, ChartJS, Bcrypt, and Stripe
            </p>
          </div>
          <div className="breakdown">
            <div>A USER IS ABLE TO</div>
            <ul>
              <li>Login and Logout</li>
              <li>Register</li>
              <li>Become a Host</li>
              <li>View Detailed Experience Summary</li>
              <li>Purchase an Experience</li>
              <li>View Purchase History</li>
              <li>Review Purchased Experiences</li>
              <li>Search and Filter Experiences</li>
            </ul>
          </div>
          <div className="breakdown">
            <div>A HOST IS ABLE TO</div>
            <ul>
              <li>Be a User</li>
              <li>Create an Experience</li>
              <li>View Created Experiences</li>
            </ul>
          </div>
          <div
            style={{ marginLeft: "15px", color: "$grey", marginBottom: "10px" }}
          >
            visit my github repo{" "}
            <a
              href="https://github.com/jemilalghani/moment"
              style={{
                textDecoration: "none",
                color: "navy",
                fontWeight: "600"
              }}
            >
              here
            </a>
            !
          </div>
        </div>
      </div>
    );
  }
}
export default withContext(Moment);
