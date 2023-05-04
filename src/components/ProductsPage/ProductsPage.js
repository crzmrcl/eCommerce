import './ProductsPage.scss';
import { useState, useEffect } from 'react';
import Header from '../Header/Header'

function ProductsPage() {

    const tabMenuList = [ "All Categories", "HTML Design", "WP Themes", "CMS Themes", "eCommerce", "Blogging", "UI Templates" ];

    const [ tabMenu, setTabMenu ] = useState(0);
    const [isSelect, setIsSelect] = useState(false);

    const handleClickTabMenu = (e) => {
        switch (e) {
            case 0:
                setTabMenu(0);
                setIsSelect(true);
                break;
            case 1:
                setTabMenu(1);
                setIsSelect(true);
                break;
            case 2:
                setTabMenu(2);
                setIsSelect(true);
                break;
            case 3:
                setTabMenu(3);
                setIsSelect(true);
                break;
            case 4:
                setTabMenu(4);
                setIsSelect(true);
                break;
            case 5:
                setTabMenu(5);
                setIsSelect(true);
                break;
            case 6:
                setTabMenu(6);
                setIsSelect(true);
                break;
            default:                         
        }
    }

    const [ productListData, setProductListData ] = useState([]);

    const fetchProductList = async() => {
        const data = await fetch('../../../db.json').then( res => res.json());
        setProductListData(data.allProducts[tabMenu].data)
    }

    useEffect (() => {
        handleClickTabMenu();
        fetchProductList();
    }, [tabMenu]);

    return (
        <>
            <div className='products_container'>
                <Header />
                <div className='products_title'> Let’s Check Out News Product Theme Templates & Plugin </div>
                <div className='products_tab_cont'>
                    {
                        tabMenuList.map((item, index) => {
                            return (
                                <div className={(isSelect && index === tabMenu) ? 'products_tab_active' : 'products_tab'} key={index} onClick={() => {handleClickTabMenu(index)}}>
                                    <span> {item} </span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='products_product_cont'>
                    {
                        productListData.map((item) => {
                            return (
                                <div className='products_box'>
                                    <img id='products_product_img' src={ item.imgSrc } alt='' />
                                    <div className='products_product_name'> { item.productName } </div>
                                    <div className='products_product_price_sale'>
                                        <div className='products_product_price'> $ { item.productPrice } </div>
                                        <div className='products_product_sale'> { item.productSale } sale </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='products_view_all_cont' onClick={() => {handleClickTabMenu(0)}}> 
                    <span> View All Product </span>
                </div>
            </div>
        </>
    )
}

export default ProductsPage;