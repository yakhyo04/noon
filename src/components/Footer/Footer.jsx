import React from 'react';
import './Footer.scss';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import appStore from '../../Assets/SVG/app-store.svg';
// import googlePlay from '../../Assets/Images/googlePlay.png';
import googlePlay from '../../Assets/SVG/google-play.svg';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <ul className="footer__list">
                    <li className="footer__item">
                        <ul className="footer__submenu">
                            <li className="footer__subitem">
                                <h3 className='footer__heading'>ELECTRONICS</h3>    
                            </li>         
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Mobiles</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Tablets</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Laptops</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Home Appliances</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Camera, Photo & Video</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Televisions</a>
                            </li>                           
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Headphones</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Video Games</a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer__item">
                        <ul className="footer__submenu">
                            <li className="footer__subitem">
                                <h3 className='footer__heading'>FASHION</h3>    
                            </li>         
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Women's Fashion</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Men's Fashion</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Girl's Fashion</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Watches</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Jewellery</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Women's Handbags</a>
                            </li>                           
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Men's Eyewear</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Boy's Fashion</a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer__item">
                        <ul className="footer__submenu">
                            <li className="footer__subitem">
                                <h3 className='footer__heading'>HOME AND KITCHEN</h3>    
                            </li>         
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Bath</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Home Decor</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Kitchen & Dining</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Tools & Home Improvement</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Audio & Video</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Furniture</a>
                            </li>                           
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Patio, Lawn & Garden</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Pet Supplies</a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer__item">
                        <ul className="footer__submenu">
                            <li className="footer__subitem">
                                <h3 className='footer__heading'>BEAUTY</h3>    
                            </li>         
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Fragrance</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Make-Up</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Haircare</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Skincare</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Personal Care</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Tools & Accessories</a>
                            </li>                           
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Men's Grooming</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Health Care Essentials</a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer__item">
                        <ul className="footer__submenu">
                            <li className="footer__subitem">
                                <h3 className='footer__heading'>BABY</h3>    
                            </li>         
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Strollers & Prams</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Car Seats</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Feeding</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Bathing & Skincare</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Diapering</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Baby Clothing & Shoes</a>
                            </li>                           
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Baby & Toddler Toys</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Baby Foods</a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer__item">
                        <ul className="footer__submenu">
                            <li className="footer__subitem">
                                <h3 className='footer__heading'>TOP BRANDS</h3>    
                            </li>         
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Mothercare</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Apple</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Nike</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Samsung</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Tefal</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>L'Oreal Paris</a>
                            </li>                           
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Skechers</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Silsal</a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer__item">
                        <ul className="footer__submenu">
                            <li className="footer__subitem">
                                <h3 className='footer__heading'>DAILY GROCERIES</h3>    
                            </li>         
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Fresh Produce</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Dairy & Eggs</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Bread & Bakery</a>
                            </li>
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Meat & Seafood</a>    
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Breakfast Food</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Pantry Staples</a>
                            </li>                           
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Household Supplies</a>
                            </li>                            
                            <li className="footer__subitem">
                                <a href="/" className='footer__link'>Personal Care</a>
                            </li>
                        </ul>
                    </li>
                </ul>


                <div className="footer__div">
                    <nav className="footer__nav">
                        <h3>Hello</h3>
                        <ul className='footer__div--menu'>
                            <li className='footer__div--item2'>
                                <img className='footer__image' src={appStore} alt="appStore" />
                            </li>
                            <li className='footer__div--item2'>
                                <img className='footer__image2' src={googlePlay} alt="appStore" />
                            </li>
                        </ul>
                    </nav>
                    <nav className="footer__nav">
                        <h3>CONNECT WITH US</h3>
                        <ul className='footer__div--menu'>
                            <li className="footer__div--item">
                                <FaFacebookF className='footer__div--icon'/>
                            </li>
                            <li className="footer__div--item">
                                <FaTwitter className='footer__div--icon'/>
                            </li>
                            <li className="footer__div--item">
                                <FaInstagram className='footer__div--icon'/>
                            </li>
                            <li className="footer__div--item">
                                <FaLinkedinIn className='footer__div--icon'/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
