import './LoginPage.scss'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { VscEye } from 'react-icons/vsc';
import { VscEyeClosed } from 'react-icons/vsc';

function LoginPage() {

    const credentialsArray = [
        {
            id: 1,
            email: 'John',
            password: 'one1'
        },
        {
            id: 2,
            email: 'Lily',
            password: 'two2'
        },
        {
            id: 3,
            email: 'Jane',
            password: 'three3'
        },
        {
            id: 4,
            email: 'Lester',
            password: 'four4'
        },
        {
            id: 5,
            email: 'Mark',
            password: 'five5'
        },
    ]

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loggedIn, setLoggedIn ] = useState(false);

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
        credentialsArray.filter((item) => {
        
        if (item.email === email && item.password === password) {
            setLoggedIn(true);
            localStorage.setItem('email', email);
        } 
        }) 
    }
                
    useEffect(() => {
        handleShowHidePassword();
        handleLogin();
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
                            <input type='text' className='login_left_email_input' onChange={e => setEmail(e.target.value) } />
                        </div>
                        <div className='login_left_pw_label'> Password </div>
                        <div className='login_left_pw_cont'>
                            <input type='password' className='login_left_pw_input' onChange={e => setPassword(e.target.value) } />
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
                        {
                            loggedIn ? 
                            <Link to='/' className='login_left_login_btn_link'>
                                <div className='login_left_login_btn' onClick={() => {handleLogin()}}>
                                    <span> LOGIN </span>
                                </div>
                            </Link> :
                            <div className='login_left_login_btn' onClick={() => {handleLogin()}}>
                                <span> LOGIN </span>
                            </div>                            
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;