import React, { Component } from "react";
import Slider from "react-slick";
import home from "../Images/animeHome.png";
import about from "../Images/animeAbout.png";
import popup from "../Images/animePopup.png";
import store from "../Images/animeStore.png";
import video from "../Images/animeVideo.mov";
import withContext from "../Context_HOC";
import arrow from "../Images/menu.svg";
// import filter from "../Images/FilterModal.png";

class Anime extends Component {
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
              <img className="slider" src={home} alt="" />
            </div>
            <div className="slider">
              {/* <img className="slider" src={filter} alt="" /> */}
              <video width="100%" controls>
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div className="slider">
              <img className="slider" src={about} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={store} alt="" />
            </div>
            <div className="slider">
              <img className="slider" src={popup} alt="" />
            </div>
          </Slider>
          <div className="info-header">
            <h1>Anime Food</h1>
            <p className="label">E-COMMERCE [CLICK THROUGH DOTS ABOVE]</p>
            <p>
              Have you ever wanted to eat the food you see in anime? Well, I
              have...
            </p>
            <p className="website-link" id="nores">
              <a
                href="https://jemilalghani.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                live site
              </a>
            </p>
          </div>
          <div className="info">
            <p style={{ fontWeight: 600, marginBottom: "5px" }}>
              Technologies used
            </p>
            <p>Javascript, HTML, and CSS</p>
          </div>
          <div className="breakdown">
            <div>A USER IS ABLE TO</div>
            <ul>
              <li>Mute and unmute key video</li>
              <li>Add items to cart, max 5 items</li>
              <li>Remove items from cart</li>
              <li>View or hide cart</li>
            </ul>
          </div>
          <div
            style={{ marginLeft: "15px", color: "$grey", marginBottom: "10px" }}
          >
            visit my github repo{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jemilalghani/jemilalghani.github.io"
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
export default withContext(Anime);
