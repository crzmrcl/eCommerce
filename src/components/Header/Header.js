import './Header.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import 'typeface-josefin-sans';
import DsLogo from '../../assets/frontpage/front-ds-logo.png';
import FillIcon from '../../assets/frontpage/front-function-fill.png';
import ArrowDownIcon from '../../assets/frontpage/front-arrow-down-s-fill.png';
import LikeIcon from '../../assets/frontpage/front-like-icon.png';
import CardIcon from '../../assets/frontpage/front-card-icon.png';
import AccountIcon from '../../assets/frontpage/front-account-icon.png';

function Header() {

    const [ showOptions, setShowOptions ] = useState(false);

    const handleCategoryClick = () => {
        showOptions ? setShowOptions(false) : setShowOptions(true);
    }

    const [ firstName, setFirstName ] = useState('');

    useEffect(() => {
        setFirstName(localStorage.getItem('email'));
    }, []);

    return (
        <>
            <div className='header_container'>
                <div className='header_top_cont'>
                    <div className='header_left_cont'>
                        <Link to='/'>
                            <img className='header_ds_logo' src={DsLogo} alt='' />
                        </Link>                        
                        <div className='header_ds_name'>DigiSell</div>
                        <div className='header_dropdown_cont'>
                            <img src={FillIcon} id='header_fill_icon' alt='' />
                            <div className='header_category_name'>Categories</div>
                            <img src={ArrowDownIcon} id='header_arrow_icon' onClick={handleCategoryClick} alt='' />
                        </div>
                    </div>
                    {
                        showOptions ? 
                        <div className='header_options_cont'>
                            <Link to='/about' className='header_options_sub_link'>
                                <div className='header_options_sub'> About </div>
                            </Link>
                            <Link to='/featured' className='header_options_sub_link'>
                                <div className='header_options_sub'> Featured Products </div>
                            </Link>                            
                            <Link to='/all/products' className='header_options_sub_link'>
                                <div className='header_options_sub'> All Products </div>
                            </Link>
                            <Link to='/testimonial' className='header_options_sub_link'>
                                <div className='header_options_sub'> Feedbacks </div>
                            </Link>
                            <Link to='/blog' className='header_options_sub_link'>
                                <div className='header_options_sub'> Latest News </div>
                            </Link>                            
                        </div> 
                        : null
                    }
                    <div className='header_right_cont'>
                        <div className='header_wishlist_cont'>
                            <img src={LikeIcon} id='header_like_icon' alt='' />
                        </div>
                        <div className='header_card_cont'>
                            <img src={CardIcon} id='header_card_icon' alt='' />
                        </div>
                        <Link to='/login' className='header_login_button'>
                            <div className='header_sign_in_cont'>
                                <img src={AccountIcon} id='header_account_icon' alt='' />
                                {
                                    firstName === null ? 
                                    <div className='header_sign_in_name'> Sign In </div> :
                                    <div className='header_sign_in_name'> { firstName } </div>
                                }                                
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;