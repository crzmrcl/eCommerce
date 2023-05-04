import './AboutPage.scss';
import React from 'react';
import 'typeface-josefin-sans';
import Header from '../Header/Header';
import { HiDocumentText } from 'react-icons/hi';
import { AiFillMessage } from 'react-icons/ai';
import { HiSquare3Stack3D } from 'react-icons/hi2';
import { MdUpdate } from 'react-icons/md';

function AboutPage() {

    const AboutData = [
        {
            title: 'Well Documentation',
            imgIcon: <HiDocumentText />,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis.'
        },
        {
            title: 'Live Support',
            imgIcon: <AiFillMessage />,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis.'
        },
        {
            title: 'Free Resource',
            imgIcon: <HiSquare3Stack3D />,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis.'
        },
        {
            title: 'Regular Update',
            imgIcon: <MdUpdate />,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis.'
        }
    ]

    return (
        <>
            <div className='about_page_cont'>
                <Header className='header' />
                <div className='about_title'> Why Choose Us </div>
                <div className='about_card_cont'>                
                    {
                        AboutData.map( item => {
                            return (
                                
                                <div className='about_box'>
                                    <div className='about_icon_cont'>
                                        <div className='about_circle_bg'>
                                            <div className='about_icon'> {item.imgIcon} </div>
                                        </div>                                        
                                    </div>
                                    <div className='about_card_title'> {item.title} </div>
                                    <div className='about_card_content'> {item.content} </div>
                                </div>                                
                            )
                        }                            
                        )
                    }                    
                </div>
            </div>
        </>
    )
}

export default AboutPage;