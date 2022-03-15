import React from 'react';
import './Guide.scss';
import yourGuide from '../../Assets/Images/your-guide.png';
import yourGuide1 from '../../Assets/Images/your-guide-1.png';
import yourGuide2 from '../../Assets/Images/your-guide-2.png';
import yourGuide3 from '../../Assets/Images/your-guide-3.png';
import yourGuide4 from '../../Assets/Images/your-guide-4.png';

const Guide = () => {
    return (
        <div className="guide">
            <div className='container'>
                <img className='guide__image' src={yourGuide} alt="yourGuide" />
                <ul className='guide__list'>
                    <li className="guide__item">
                        <img className='guide__img' src={yourGuide1} alt="yourGuide1" />
                    </li>
                    <li className="guide__item">
                        <img className='guide__img' src={yourGuide2} alt="yourGuide2" />
                    </li>
                    <li className="guide__item">
                        <img className='guide__img' src={yourGuide3} alt="yourGuide3" />
                    </li>
                    <li className="guide__item">
                        <img className='guide__img' src={yourGuide4} alt="yourGuide4" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Guide;
