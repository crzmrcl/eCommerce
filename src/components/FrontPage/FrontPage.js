import './FrontPage.scss';
import React from 'react';
import Header from '../Header/Header';
import 'typeface-josefin-sans';
import CircleBg from '../../assets/frontpage/front-circle-bg.png';
import SearchIcon from '../../assets/frontpage/front-search-line.png';
import App1 from '../../assets/frontpage/front-image-1.png';
import App2 from '../../assets/frontpage/front-image-2.png';
import App3 from '../../assets/frontpage/front-image-3.png';
import App4 from '../../assets/frontpage/front-image-4.png';
import App5 from '../../assets/frontpage/front-image-5.png';

function FrontPage() {
    return (
        <>
            <div className='front_container'>
                <img src={CircleBg} id='front_circle_bg' alt='' />
                <Header className='header' />
                <div className='front_body_cont'>
                    <div className='front_left_body'>
                        <div className='front_title_cont'>
                            World Top <span> Themes, Plugins & Templates </span>
                        </div>
                        <div className='front_detail_cont'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ultricies habitant eget volutpat ut aenean in dolor. Praesent mi velit in id hac platea leo vulputate.
                        </div>
                        <div className='front_search_cont'>
                            <input className='front_input_box' placeholder='e.g. "wordpress"' />
                            <div className='front_search_btn'>
                                <img src={SearchIcon} alt='' className='front_search_icon' />
                                <div className='front_search_text'> Search </div>
                            </div>
                        </div>
                    </div>
                    <div className='front_right_body'>
                        <img src={App5} alt='' className='front_app5_unknown' />   
                        <img src={App1} alt='' className='front_app1_nodejs' />
                        <img src={App2} alt='' className='front_app2_v' />
                        <img src={App3} alt='' className='front_app3_angular' />
                        <img src={App4} alt='' className='front_app4_dotnet' />         
                    </div>
                </div>                
            </div>
        </>
    )
}

export default FrontPage;