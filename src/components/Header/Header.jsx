import React from 'react';
import './Header.scss';
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import dubai from '../../Assets/SVG/dubai.svg';
// import Category from '../Categories/Category';

const Header = () => {

    return (
        <header className='header'>
        <div className='container'>
            <ul className='header__list'>
                <li className='header__item'>
                    <a href="/" className='header__link header__noon'>noon</a>
                </li>
                <li className='header__item'>
                <img src={dubai} alt="dubai" />
                <select className='header__select' >
                    <option value="dubai" >dubai</option>    
                    <option value="arab">Arab</option>    
                </select>
                </li>
                <li className='header__item'>
                    <input type="text" className='header__input' placeholder='What are you looking for?' />
                </li>
                <li className='header__item'>
                    <a href="/" className='header__link'>العربية</a>
                </li>
                <li className='header__item'>
                    <a href="/" className='header__link'>Sign In <AiOutlineUser/></a>
                </li>
                <io5 className='header__item'>
                    <a href="/" className='header__link'>Cart <IoCartOutline/></a>
                </io5>
            </ul>

            {/* <Category/> */}
        </div>
        </header>
    );
}

export default Header;
