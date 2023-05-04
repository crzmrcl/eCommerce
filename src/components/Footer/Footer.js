import './Footer.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import 'typeface-josefin-sans';
import Send from '../../assets/footer/footer-send.png';
import CreditIcon from '../../assets/footer/footer-credit-logo.png';

function Footer() {

    const [data, setData] = useState([]);

    const handleFetchData = async() => {
        const fetchData = await fetch('../../../db.json').then(response => response.json());
        setData(fetchData.footer);
        console.log('fetch data', fetchData);       
    }

    useEffect (() => {
        handleFetchData();
    }, [])

    return (
        <>
            <div className='footer_cont'>
                <div className='footer_top_cont'>
                    <div className='footer_newsletter'>Newsletter</div>
                    <div className='footer_email_cont'>
                        <input placeholder='Your email' className='footer_input'/>
                        <div className='footer_email_enter'>
                            <img src={Send} id='footer_send' alt='' />
                        </div>
                    </div>
                </div>
                <div className='footer_bottom_cont'>
                    <div className='footer_apps'>
                        {
                            data.map( (item) =>
                                {
                                    return (                                    
                                        <div className='footer_apps_text' key={item.id}> 
                                            {item.app} 
                                        </div>                               
                                    ) 
                                }
                            )
                        }
                    </div>
                    <div className='footer_credits_cont'>
                        <img src={CreditIcon} alt='' id='footer_credit_logo' />
                        <div className='footer_credit_text'> 2021 JS Template. Designd By Ojjomedia All Rights Reserved </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;