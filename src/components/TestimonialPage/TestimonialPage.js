import './TestimonialPage.scss';
import { useState } from 'react';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import 'typeface-josefin-sans';
import { ImQuotesRight } from 'react-icons/im';
import PaginationIcon from '../../assets/testimonialpage/testimonial-radio-button.png';
import PaginationIconActive from '../../assets/testimonialpage/testimonial-radio-button-active.png';

function TestimonialPage() {

    const [ pagination, setPagination ] = useState(1);

    const handlePagination = (e) => {
        switch (e) {
            case 1:
                setPagination(1);
                break;
            case 2:
                setPagination(2);
                break;
            case 3:
                setPagination(3);
                break;
            default:
        }
    }

    const testimonialArray = [
        {
            id: 1,
            name: 'Guy Hawkins',
            position: 'CEO, Founder',
            statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
        },
        {
            id: 2,
            name: 'Cameron Williamson',
            position: 'CEO, Founder',
            statement: 'Id in auctor posuere nisl volutpat at laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices.',
        },
        {
            id: 3,
            name: 'Cody Fisher',
            position: 'CEO, Founder',
            statement: 'Consectetur adipiscing elit, lorem ipsum dolor sit amet. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
        },
        {
            id: 4,
            name: 'Anne Nown',
            position: 'CEO, Founder',
            statement: 'Nibh eleifend arcu vel faucibus arcu, ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in auctor posuere nisl volutpat at laoreet.',
        },
        {
            id: 5,
            name: 'John Hills',
            position: 'CEO, Founder',
            statement: 'Ultrices lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu. Id in auctor posuere nisl volutpat at laoreet.',
        },
        {
            id: 6,
            name: 'Hillary Uy',
            position: 'CEO, Founder',
            statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
        },
        {
            id: 7,
            name: 'Juan Dela Cruz',
            position: 'CEO, Founder',
            statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
        },
        {
            id: 8,
            name: 'Linda Sy',
            position: 'CEO, Founder',
            statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
        },
        {
            id: 9,
            name: 'Larry Lopez',
            position: 'CEO, Founder',
            statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.',
        }
    ]

    return (
        <>
            <div className='testimonial_container'>
                <Header className='header' />
                <div className='testimonial_title'> What Our Clients Say </div>
                {
                    pagination === 1 &&
                    <div className='testimonial_statement_cont'>
                        {
                            testimonialArray.map( (item) => {
                                if (item.id <= 3) {
                                    return (
                                        <div className='testimonial_statement'>
                                            <ImQuotesRight className='testimonial_quot_icon' /> 
                                            <div className='testimonial_testimony'> {item.statement} </div>
                                            <div className='testimonial_name'> {item.name} </div>
                                            <div className='testimonial_position'> {item.position} </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                }
                {
                    pagination === 2 &&
                    <div className='testimonial_statement_cont'>
                        {
                            testimonialArray.map( (item) => {
                                if (item.id <= 6 && item.id > 3) {
                                    return (
                                        <div className='testimonial_statement'>
                                            <ImQuotesRight className='testimonial_quot_icon' /> 
                                            <div className='testimonial_testimony'> {item.statement} </div>
                                            <div className='testimonial_name'> {item.name} </div>
                                            <div className='testimonial_position'> {item.position} </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                }
                {
                    pagination === 3 &&
                    <div className='testimonial_statement_cont'>
                        {
                            testimonialArray.map( (item) => {
                                if (item.id <= 9 && item.id > 6) {
                                    return (
                                        <div className='testimonial_statement'>
                                            <ImQuotesRight className='testimonial_quot_icon' /> 
                                            <div className='testimonial_testimony'> {item.statement} </div>
                                            <div className='testimonial_name'> {item.name} </div>
                                            <div className='testimonial_position'> {item.position} </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                }               
                <div className='testimonial_pagination'>
                    <img src={pagination === 1 ? PaginationIconActive : PaginationIcon} id='testimonial_pagination_1' onClick={() => {handlePagination(1)}} alt='' />
                    <img src={pagination === 2 ? PaginationIconActive : PaginationIcon} id='testimonial_pagination_2' onClick={() => {handlePagination(2)}} alt='' />
                    <img src={pagination === 3 ? PaginationIconActive : PaginationIcon} id='testimonial_pagination_3' alt='' onClick={() => {handlePagination(3)}} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default TestimonialPage;