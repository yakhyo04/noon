import React from 'react';
import Products from './Products';
import './RecomendedProducts.scss';
import Slider from "react-slick";

// const Recomendedproducts = () => {
//     return (
//         <div className='container'>
//             <h3>Recommended for you</h3>
//             <div className="recommend">
//             {Products
//                 .filter((product) => product.id !== 20 )
//                 .map((product) => {
//                     return (
//                         <div className='recommend__div' key={product.id}>
//                             <span className='recommend__code'>{product.code}</span>
//                             <br /><br />
//                             <img className='recommend__image' src={product.poster} alt={product.poster} />
//                             <p className='recommend__title'>{product.title}</p>
//                             <h3>{product.price}</h3>
//                             <del>{product.discount}</del>
//                             <span className='recommend__off'> {product.off}</span>
//                             <p className='recommend__arrive'>{product.arrive}</p>
//                             <b>{product.date}</b>
//                             <br /><br />
//                             <span className='recommend__express'>{product.express}</span>
//                         </div>
//                     )
//                 })
//             }
//             </div>
//         </div>
//     );
// }

// export default Recomendedproducts;


export default function  Recomendedproducts ()  {
    // render() {
      var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
      return (
          <div className='container'>
             <h3 className='recommend__heading'>Recommended for you</h3>
             <div className="recommend">
              <Slider  {...settings}>
             {Products
                .filter((product) => product.id !== 20 )
                .map((product) => {
                    return (
                        <div className='recommend__div' key={product.id}>
                            <span className='recommend__code'>{product.code}</span>
                            <br /><br />
                            <img className='recommend__image' src={product.poster} alt={product.poster} />
                            <p className='recommend__title'>{product.title}</p>
                            <h3>{product.price}</h3>
                            <del>{product.discount}</del>
                            <span className='recommend__off'> {product.off}</span>
                            <p className='recommend__arrive'>{product.arrive}</p>
                            <b>{product.date}</b>
                            <br /><br />
                            <span className='recommend__express'>{product.express}</span>
                        </div>
                    )
                })
            }
          </Slider>
            </div>
        </div>
      );
    }