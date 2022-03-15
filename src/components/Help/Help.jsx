import React from 'react';
import './Help.scss';
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Help = () => {
    return (
        <div className="help__container">
        <div className="container">
                <div className="help">
                    <nav className="help__nav">
                    <h2 className='help__title'>We're Always Here To Help</h2>
                    <p className='help__text'>Reach out to us through any of these support channels</p>
                    </nav>
                    <nav className="help__nav">
                        <ul className='help__list'>
                            <li className='help__item'><a href="/" className='help__link'>
                                <BiHelpCircle  className='help__icon'/>
                               <span className='help__span'>HELP CENTER</span>
                                <p className='help__mail'>help.noon.com</p>
                            </a></li>
                            <li className='help__item'><a href="/" className='help__link'>
                                <AiOutlineMail className='help__icon'/>
                                <span className='help__span'>EMAIL SUPPORT</span>
                                <p className='help__mail'>care@noon.com</p>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            </div>
    );
}

export default Help;
