import React from 'react';
import './Category.scss';
import bg from '../../Assets/Images/bg.png';
import { AiFillCaretDown } from "react-icons/ai";
import Slider from "react-slick";



// const Category = () => {
//     return (
//         <div className='category'>
//             <div className="containers">
//                 <ul className='category__list'>
//                     <li className="category__item">
//                         <a href="/" className='category__link category__all'>ALL CATEGORIES <AiFillCaretDown/></a>
//                     </li>
//                     <li className="category__item">
//                         <a href="/" className='category__link'>ELECTRONICS</a>
//                     </li>
//                     <li className="category__item">
//                         <a href="/" className='category__link'>MEN</a>
//                     </li>
//                     <li className="category__item">
//                         <a href="/" className='category__link'>WOMEN</a>
//                     </li>
//                     <li className="category__item">
//                         <a href="/" className='category__link'>HOME</a>
//                     </li>
//                     <li className="category__item">
//                         <a href="/" className='category__link'>BEAUTY & FRAGRANCE</a>
//                     </li>
//                     <li className="category__item">
//                         <a href="/" className='category__link'>BABY & TOYS</a>
//                     </li>
//                     <li className="category__item">
//                         <a href="/" className='category__link'>GROCERY</a>
//                     </li>
//                     <li className="category__item">
//                         <a href="/" className='category__link'>SPORTS</a>
//                     </li>
//                     <li className="category__item">
//                         <a href="/" className='category__link'>BESTSELLERS</a>
//                     </li>
//                     <li className="category__item">
//                         <a href="/" className='category__link'>SELL ON NOON</a>
//                     </li>
//                 </ul>
//             </div>
//             <img className='category__image' src={bg} alt="" />
//         </div>
//     );
// }

// export default Category;



export default function  Category ()  {
    var settings = {
    //   dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 5,
      // initialSlide: 0,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 6,
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
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="containers">
            <div className="category">
                <ul className='category__list'>
                <li className="category__item">
                        <a href="/" className='category__link category__all'>ALL CATEGORIES <AiFillCaretDown/></a>
                    </li>
                </ul>
          <ul className='category__list'>
                <Slider {...settings}>
                    <li className="category__item">
                        <a href="/" className='category__link'>ELECTRONICS</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className='category__link'>MEN</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className='category__link'>WOMEN</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className='category__link'>HOME</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className='category__link'>BEAUTY & FRAGRANCE</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className='category__link'>BABY & TOYS</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className='category__link'>GROCERY</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className='category__link'>SPORTS</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className='category__link'>BESTSELLERS</a>
                    </li>
                    <li className="category__item">
                        <a href="/" className='category__link'>SELL ON NOON</a>
                    </li>
        </Slider>
                </ul>
        </div>
        <img className='category__image' src={bg} alt="" />
        </div>
    );
  }