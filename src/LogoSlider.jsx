import React, { Component } from "react";
import Slider from "react-slick";
import logo from './logo.svg';
import "./LogoSlider.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
      <div className="container-images-slider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <img src={logo}/>
          </div>
        </Slider>
      </div>
    );
  }
}