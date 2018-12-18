import React from "react";
// import "./Pixelate.scss";
import Slider from "react-slick";
import host from "../Images/Host.png";
import register from "../Images/Register.png";
import review from "../Images/Review.png";
import moment from "../Images/Moment.png";

const Moment = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
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
        <h1>www.airmoment.live</h1>
        <p>A clone of the Airbnb experience page</p>
        <p className="website-link">website</p>
      </div>
      <div className="info">
        <p>
          Technologies used: React, CSS, Context API, Express, Express-Sessions,
          Massive, RESTful API's, PostgreSQL, Node, Digital Ocean, Nodemailer,
          Cloudinary, ChartJS, Bcrypt, and Stripe
        </p>
      </div>
    </div>
  );
};

export default Moment;
