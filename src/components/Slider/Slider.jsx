import React, { Component } from 'react';
import './Slider.scss';
import Slider from "react-slick";
import emaar from '../../Assets/Images/emaar.jpg';
import ramadan from '../../Assets/Images/ramadan.png';
import shop from '../../Assets/Images/shop-grocery.png';
import motherday from '../../Assets/Images/mother-day.png';
import intex from '../../Assets/Images/intex.png';
import scooter from '../../Assets/Images/scooter.png';
import toy from '../../Assets/Images/toy-sale.gif';
import apple from '../../Assets/Images/apple.gif';
import fashion from '../../Assets/Images/fashion.png';
import fashionn from '../../Assets/Images/fashionn.png';

export default function  SimpleSlider ()  {
    // render() {
      var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
          <div className="container">
        <div className='slider'>
            <div className='slider__div'>
          <Slider className='slider_1' {...settings}>
            <div>
            <img className='slider__img' src={ramadan} alt="" />
            </div>
            <div>
            <img className='slider__img' src={toy} alt="" />
            </div>
            <div>
            <img className='slider__img' src={shop} alt="" />
            </div>
            <div>
            <img className='slider__img' src={apple} alt="" />
            </div>
            <div>
            <img className='slider__img' src={intex} alt="" />
            </div>
            <div>
            <img className='slider__img' src={motherday} alt="" />
            </div>
            <div>
            <img className='slider__img' src={scooter} alt="" />
            </div>
            <div>
                <img className='slider__img' src={emaar} alt="" />
            </div>
          </Slider>
          </div>

        <div className='slider__fashion'>
            <img className='slider__fashion' src={fashion} alt="" />
            <img className='slider__fashion' src={fashionn} alt="" />
        </div>
        </div>

        </div>
      );
    }
//   }
