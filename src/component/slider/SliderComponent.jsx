import React, { Component } from "react";
import Slider from "react-slick";

const SimpleSlider = (props) => {
const {lgslidesToShow,smslidesToShow,center} = props
    const settings = {
      dots: true,
  infinite: true,
  centerMode: center?true:false,
  centerPadding: center?center:'0px',
  speed: 300,
  slidesToShow: lgslidesToShow? lgslidesToShow :4,
  slidesToScroll: lgslidesToShow? lgslidesToShow :4,
  dots: false,




  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: smslidesToShow? smslidesToShow :3,
        slidesToScroll: smslidesToShow? smslidesToShow :3,
        dots: true,
        arrows: false,

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        dots: true,
        slidesToScroll: 1,
        arrows: false,
      }
    },{
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        arrows: false,
      }
    }

  ],
}
    return (
      <>
        <Slider {...settings}>
        {props.children}

        </Slider>
      </>
    )
  }

  export default SimpleSlider
