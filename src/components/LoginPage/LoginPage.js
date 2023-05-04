import './LoginPage.scss'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { VscEye } from 'react-icons/vsc';
import { VscEyeClosed } from 'react-icons/vsc';

function LoginPage() {

    window.alert('This page is ogoing development. Click LOGIN buton to continue.');

    const [ showPassword, setShowPassword ] = useState(0);

    const handleShowHidePassword = (io) => {
        switch (io) {
            case 0:
                setShowPassword(false);
                break;
            case 1:
                setShowPassword(true);
                break;
                default:
        }
    }

    const handleLogin = () => {
        localStorage.setItem('firstName', 'Sign In');
    }
                
    useEffect(() => {
        handleShowHidePassword();
    }, []);

    return (
        <>
            <div className='login_container'>                
                <div className='login_right_cont'>
                    <div className='login_right_wc'> Welcome </div>
                    <div className='login_right_to_ds'> to <span> DigiSell </span> </div>
                    <div className='login_right_ds_feat'>
                        <div className='login_right_ds-feat_cont'>
                            <BsFillCheckCircleFill className='login_right_check_icon' />
                            <div className='login_right_feat'> Well Documentation </div>
                        </div>
                        <div className='login_right_ds-feat_cont'>
                            <BsFillCheckCircleFill className='login_right_check_icon' />
                            <div className='login_right_feat'> Live Support </div>
                        </div>
                        <div className='login_right_ds-feat_cont'>
                            <BsFillCheckCircleFill className='login_right_check_icon' />
                            <div className='login_right_feat'> Free Resource </div>
                        </div>
                        <div className='login_right_ds-feat_cont'>
                            <BsFillCheckCircleFill className='login_right_check_icon' />
                            <div className='login_right_feat'> Regular Update </div>
                        </div>
                    </div>                    
                </div>
                <div className='login_left_cont'>
                    <div className='login_left_email_pw_cont'>
                        <div className='login_left_email_label'> Email </div>
                        <div className='login_left_email_cont'>
                            <input type='text' className='login_left_email_input'></input>
                        </div>
                        <div className='login_left_pw_label'> Password </div>
                        <div className='login_left_pw_cont'>
                            <input type='password' className='login_left_pw_input'></input>
                            {/* <div className='login_left_eye' onClick={() => { showPassword ? setShowPassword(true) : setShowPassword(false) }}> */}
                                {
                                    showPassword ? 
                                    <div className='login_left_eye' onClick={() => { handleShowHidePassword(1) }}>
                                        <VscEye className='login_left_eye_btn' />
                                    </div>
                                     :
                                    <div className='login_left_eye' onClick={() => { handleShowHidePassword(0) }}>
                                        <VscEyeClosed className='login_left_eye_btn' />
                                    </div>                                    
                                }
                            {/* </div> */}
                        </div>
                    </div>
                    <div className='login_left_forgot_cont'>
                        <div className='login_left_forgot'> Forgot your password ? </div>
                        <Link to='/' className='login_left_login_btn_link'>
                            <div className='login_left_login_btn' onClick={() => {handleLogin()}}>
                                <span> LOGIN </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;