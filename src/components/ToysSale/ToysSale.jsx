import React from 'react';
import './ToysSale.scss';
import scooters from '../../Assets/Images/scooters.png';
import trampolines from '../../Assets/Images/trampolines.png';
import card from '../../Assets/Images/card.png';
import remote from '../../Assets/Images/remote.png';
import educational from '../../Assets/Images/educational.png';
import fidget from '../../Assets/Images/fidget.png';
import shopAllDeals from '../../Assets/Images/shop-all-deals.png';
import emaar from '../../Assets/Images/emar.jpg';

const Toyssale = () => {
    return (
        <div className='toys'>
            <div className="container">
                <h1>Toys sale | 14-16 March</h1>
                <ul className='toys__list'>
                    <li className="toys__item">
                        <img className='toys__img' src={scooters} alt="scooters" />
                    </li>
                    <li className="toys__item">
                        <img className='toys__img' src={trampolines} alt="trampolines" />
                    </li>
                    <li className="toys__item">
                        <img className='toys__img' src={card} alt="card" />
                    </li>
                    <li className="toys__item">
                        <img className='toys__img' src={remote} alt="remote" />
                    </li>
                    <li className="toys__item">
                        <img className='toys__img' src={educational} alt="educational" />
                    </li>
                    <li className="toys__item">
                        <img className='toys__img' src={fidget} alt="fidget" />
                    </li>
                    <li className="toys__item">
                        <img className='toys__img' src={shopAllDeals} alt="shop" />
                    </li>
                </ul>

                <img className='toys__emar' src={emaar} alt="emaar" />
            </div>
        </div>
    );
}

export default Toyssale;
