import React from 'react';
import './End.scss';
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { SiAmericanexpress } from "react-icons/si";


const End = () => {
    return (
        <div className='end'>
            <div className="container">
                <div className="end__div">
                    <nav className="end__nav">
                        <p className='end__text'>© 2022 noon. All Rights Reserved</p>
                    </nav>
                    <nav className="end__nav1">
                        <ul className="end__list1">
                            <li className="end__item">
                                <FaCcMastercard className='end__icon'/>
                            </li>
                            <li className="end__item">
                                <FaCcVisa className='end__icon'/>
                            </li>
                            <li className="end__item">
                                <BsCashCoin className='end__icon'/>
                            </li>
                            <li className="end__item">
                                <SiAmericanexpress className='end__icon'/>
                            </li>
                        </ul>
                    </nav>
                    <nav className="end__nav2">
                        <ul className="end__list">
                            <li className="end__item"><a href="/" className='end__link'> Careers</a></li>
                            <li className="end__item"><a href="/" className='end__link'> Warranty Policy</a></li>
                            <li className="end__item"><a href="/" className='end__link'> Sell with us</a></li>
                            <li className="end__item"><a href="/" className='end__link'> Terms of Use</a></li>
                            <li className="end__item"><a href="/" className='end__link'> Terms of Sale</a></li>
                            <li className="end__item"><a href="/" className='end__link'> Privacy Policy</a></li>
                            <li className="end__item"><a href="/" className='end__link'> Consumer Rights</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default End;
