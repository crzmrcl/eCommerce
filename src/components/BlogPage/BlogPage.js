import './BlogPage.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { HiClock } from 'react-icons/hi';
import { RiContactsFill } from 'react-icons/ri';
import BlogPagination from '../../assets/blogpage/blog-radio-button.png';
import BlogPaginationActive from '../../assets/blogpage/blog-radio-button-active.png';

function BlogPage() {

    const [blogData, setBlogData] = useState([]);

    const fetchBlogData = async() => {
        const response = await fetch('../../../db.json').then(data => data.json());
        setBlogData(response.blog);
    }

    useEffect (() => {
        fetchBlogData();
    }, []);

    const [pagination, setPagination] = useState(1);

    const handleBlogPagination = (e) => {
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

    return (
        <>
            <div className='blog_container'>
                <Header />
                <div className='blog_latest_news'> Latest News </div>
                <div className='blog_news_cont'>
                    {
                        pagination === 1 && (
                                blogData.map( (item) => {
                                if ( item.id <= 3 ) {
                                    return (
                                        <div className='blog_news_box'>
                                            <img src={item.imgSrc} id="blog_image" alt=''/>
                                            <div className='blog_author_date'>
                                                <div className='blog_date_cont'>
                                                    <HiClock className='blog_icon_clock'/>
                                                    <div className='blog_date'> {item.date} </div>  
                                                </div>
                                                <div className='blog_auth_cont'>
                                                    <RiContactsFill className='blog_icon_contact'/>
                                                    <div className='blog_author'> {item.author} </div>
                                                </div>
                                            </div>
                                            <div className='blog_title'> {item.title} </div>
                                        </div>                                        
                                    )}
                                }
                            )
                        )
                    }
                    {
                        pagination === 2 && (
                                blogData.map( (item) => {
                                if ( (item.id > 3) && (item.id <= 6)  ) {
                                    return (
                                        <div className='blog_news_box'>
                                            <img src={item.imgSrc} id="blog_image" alt=''/>
                                            <div className='blog_author_date'>
                                                <div className='blog_date_cont'>
                                                    <HiClock className='blog_icon_clock'/>
                                                    <div className='blog_date'> {item.date} </div>  
                                                </div>
                                                <div className='blog_auth_cont'>
                                                    <RiContactsFill className='blog_icon_contact'/>
                                                    <div className='blog_author'> {item.author} </div>
                                                </div>
                                            </div>
                                            <div className='blog_title'> {item.title} </div>
                                        </div>
                                        
                                    )}
                                }
                            )
                        )
                    }
                    {
                        pagination === 3 && (
                                blogData.map( (item) => {
                                if ( (item.id > 6) && (item.id <= 9)  ) {
                                    return (
                                        <div className='blog_news_box'>
                                            <img src={item.imgSrc} id="blog_image" alt=''/>
                                            <div className='blog_author_date'>
                                                <div className='blog_date_cont'>
                                                    <HiClock className='blog_icon_clock'/>
                                                    <div className='blog_date'> {item.date} </div>  
                                                </div>
                                                <div className='blog_auth_cont'>
                                                    <RiContactsFill className='blog_icon_contact'/>
                                                    <div className='blog_author'> {item.author} </div>
                                                </div>
                                            </div>
                                            <div className='blog_title'> {item.title} </div>
                                        </div>
                                        
                                    )}
                                }
                            )
                        )
                    }
                </div>
                <div className='blog_pagination'>
                    <img src={pagination === 1 ? BlogPaginationActive : BlogPagination} className='blog_pagination' onClick={() => {handleBlogPagination(1)}} alt='' />
                    <img src={pagination === 2 ? BlogPaginationActive : BlogPagination} className='blog_pagination' onClick={() => {handleBlogPagination(2)}} alt='' />
                    <img src={pagination === 3 ? BlogPaginationActive : BlogPagination} className='blog_pagination' onClick={() => {handleBlogPagination(3)}} alt='' />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default BlogPage;
