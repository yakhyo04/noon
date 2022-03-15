import React from 'react';
import './deal.scss';
import megaDeal from '../../Assets/Images/mega-deal.png';
import fashionDeals from '../../Assets/Images/fashion-deals.png';
import printerDeals from '../../Assets/Images/printer-deals.png';
import toysSale from '../../Assets/Images/toys-sale.png';
import headPhoneDeals from '../../Assets/Images/headphone-deals.png';

const Deal = () => {
    return (
        <div className='deal'>
            <div className="container">
                <img className='deal__image' src={megaDeal} alt="megaDeal" />
                <ul className='deal__list'>
                    <li className="deal__item">
                        <img className='deal__img' src={fashionDeals} alt="fashion" />
                    </li>
                    <li className="deal__item">
                        <img className='deal__img' src={printerDeals} alt="printer" />
                    </li>
                    <li className="deal__item">
                        <img className='deal__img' src={toysSale} alt="toysSale" />
                    </li>
                    <li className="deal__item">
                        <img className='deal__img' src={headPhoneDeals} alt="headPhoneDeals" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Deal;
