import React, { Component } from "react";
import Slider from "react-slick";
import host from "../Images/Host.png";
import register from "../Images/Register.png";
import review from "../Images/Review.png";
import moment from "../Images/Moment.png";
import withContext from "../Context_HOC";
import book from "../Images/open-magazine.svg";
import arrow from "../Images/arrow-logo.svg";

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
          </Slider>
          <div className="info-header">
            <h1>airmoment.live</h1>
            <p>A clone of the Airbnb experience page</p>
            <p className="website-link">
              <a href="https://airmoment.live/">website</a>
            </p>
          </div>
          <div className="info">
            <p>
              Technologies used: React, CSS, Context API, Express,
              Express-Sessions, Massive, RESTful API's, PostgreSQL, Node,
              Digital Ocean, Nodemailer, Cloudinary, ChartJS, Bcrypt, and Stripe
            </p>
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
export default withContext(Moment);
