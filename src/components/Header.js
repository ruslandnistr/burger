import React from 'react';

const Header = props => 
   (
        <header className='top'>
            <div className='wrap'>
                <div className='header-content'>

                    <div className='header-rating'>
                        <div className='header-rating-tag'>Рейтинг</div>
                        <div className='header-rating-icon'>⭐⭐⭐⭐⭐ </div>

                     </div>
                     <div className='header-divider'></div>
                     <h1 className='font-effect-fire-animation'>{props.title}</h1>
                     <h3>
                         <span>
                             Швидка доставка гарячих
                             <span className='sub-header'> #бургерів</span>
                         </span>
                     </h3>
                </div>
            </div>
        </header>
    );

export default Header;