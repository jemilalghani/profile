import React, { Component } from "react";
import "./Pixelate.scss";
import Slider from "react-slick";
import pixelate from "../Images/Pixelate.png";
import userchart from "../Images/UserChart.png";
import mobile from "../Images/MobilePixelate.png";
import withContext from "../Context_HOC";
import book from "../Images/open-magazine.svg";

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
        <div className="pixelate">
          <Slider {...settings}>
            <div className="slider">
              <img className="slider" src={pixelate} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={userchart} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={mobile} alt="" />
            </div>
          </Slider>
          <div className="info-header">
            <h1>pixelate.top</h1>
            <p>A digital journal to track a user's daily mood</p>
            <p className="website-link">
              <a href="http://pixelate.top">website</a>
            </p>
          </div>
          <div className="info">
            <p>
              Technologies used: React, CSS, Redux, Express, Express-Sessions,
              Massive, RESTful API's, PostgreSQL, Node, Digital Ocean,
              Nodemailer, Cloudinary, ChartJS, Bcrypt, and Auth0
            </p>
          </div>
        </div>
        <footer
          className={this.props.context.dropdown ? "back" : "back-gone"}
          onClick={() => this.props.context.info("dropdown")}
        >
          <img src={book} width="30" alt="back" />
        </footer>
      </div>
    );
  }
}
export default withContext(Pixelate);
