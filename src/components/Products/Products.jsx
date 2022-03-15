import React from 'react';
import products from './data';
import Slider from "react-slick";
import './Products.scss';


// const Products = () => {
//     return (
//         <div>
//             {products
//                 .filter((product) => product.id !== 2)
//                 .map((product) => {
//                     return (
//                         <div key={product.id}>
//                             <img src={product.poster} alt={product.poster} />
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// }

// export default Products;

export default function  Products ()  {
      var settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        speed: 500,
        slidesToShow: 12,
        slidesToScroll: 12,
        // initialSlide: 0,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 8,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              initialSlide: 2
            } 
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };
      return (
          <div style={{"marginTop": "30px"}} className="container">
          <Slider {...settings}>
               {products
                .filter((product) => product.id !== 35)
                .map((product) => {
                    return (
                        <div key={product.id}>
                            <img className='products__image' src={product.poster} alt={product.poster} />
                        </div>
                    )
                })
            }
          </Slider>
          </div>
      );
    }

