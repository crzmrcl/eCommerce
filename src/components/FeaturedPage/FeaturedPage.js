import './FeaturedPage.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Header from '../Header/Header';

function FeaturedPage() {

    const [featuredData, setFeaturedData] = useState([]);

    const fetchFeaturedData = async() => {
        const response = await fetch('../../../db.json').then(res => res.json());
        setFeaturedData(response.featured);
    }

    useEffect(() => {
        fetchFeaturedData();
    }, [])
    
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <div className='featured_container'>
                <Header />
                <div className='featured_title'> Featured Products </div>
                <div className='featured_product_cont'>
                    {
                        featuredData.map((item) => {


                                return (
                                    <div className='featured_product_box' key={item.id}>
                                        <img id={isHover ? 'featured_product_img_hover' : 'featured_product_img' } 
                                        onMouseOver={() => (setIsHover(true))} onMouseLeave={() => (setIsHover(false))} 
                                        src= { item.productImg }  alt=''/>
                                        <div className='featured_product_name'> { item.productName} </div>
                                        <div className='featured_product_price_cont'> 
                                            <div className='featured_product_price'> ${ item.productPrice } </div>
                                            <div className='featured_product_sale'> { item.productSale } </div>
                                        </div>
                                    </div>
                                )
                        })
                    }
                </div>
                <Link to='/all/products' className='featured_view_all_link'>
                    <div className='featured_view_all'> 
                        <span> View All Product </span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default FeaturedPage;