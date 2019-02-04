import React, { Component } from "react";
import "./Pixelate.scss";
import Slider from "react-slick";
import pixelate from "../Images/Pixelate.png";
import userchart from "../Images/UserChart.png";
import mobile from "../Images/MobilePixelate.png";
import withContext from "../Context_HOC";
import arrow from "../Images/menu.svg";
import profile from "../Images/profile.png";
import modal from "../Images/modal.png";

class Pixelate extends Component {
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
              <img className="slider" src={pixelate} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={userchart} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={profile} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={mobile} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={modal} alt="" />
            </div>
          </Slider>
          <div className="info-header">
            <h1>pixelate.top</h1>
            <p className="label">PERSONAL | RESPONSIVE</p>
            <p>
              A mood tracker application displaying a year's worth of moods in a
              grid
            </p>

            <p className="website-link">
              <a href="http://pixelate.top">live site</a>
            </p>
          </div>
          <div className="info">
            <p style={{ fontWeight: 600, marginBottom: "5px" }}>
              Technologies used
            </p>
            <p>
              React, CSS, Redux, Express, Express-Sessions, Massive, RESTful
              API's, PostgreSQL, Node, Digital Ocean, Nodemailer, Cloudinary,
              ChartJS, Bcrypt, and Auth0
            </p>
          </div>
          <div className="breakdown">
            <div>A USER IS ABLE TO</div>
            <ul>
              <li>Login and Logout</li>
              <li>Pick a Mood Daily</li>
              <li>Click Grid Boxes to View Exact Day</li>
              <li>View Accumlation of Each Day of the Week in a Chart</li>
              <li>Post Messages</li>
              <li>Get Quote of Day (from External API)</li>
            </ul>
          </div>
          <div
            style={{ marginLeft: "15px", color: "$grey", marginBottom: "10px" }}
          >
            visit my github repo{" "}
            <a
              href="https://github.com/jemilalghani/personal-project"
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
export default withContext(Pixelate);
