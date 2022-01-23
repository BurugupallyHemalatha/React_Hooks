import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;