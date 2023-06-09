import './LoginPage.scss'
import { useState } from 'react';
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

    const [ showPassword, setShowPassword ] = useState(false);

    const handleLogin = () => {
        credentialsArray.filter((item) => {
        
        if (item.email === email && item.password === password) {
            setLoggedIn(true);
            localStorage.setItem('email', email);
        }
        return null; 
        }) 
    }

    const showHidePassword = () => {
        setShowPassword(prev => !prev);
    }

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
                        <div className='login_right_ds-feat_cont'>
                            <BsFillCheckCircleFill className='login_right_check_icon' />
                            <div className='login_right_feat'> Credentials to use : </div>
                        </div>
                        <div className='login_right_ds-feat_cont_cred'>
                            <div className='login_right_cred'> Email: John Password: one1 </div>
                        </div>
                        <div className='login_right_ds-feat_cont_cred'>
                            <div className='login_right_cred'> Email: Lily Password: two2 </div>
                        </div>
                        <div className='login_right_ds-feat_cont_cred'>
                            <div className='login_right_cred'> Email: Jane Password: three3 </div>
                        </div>
                        <div className='login_right_ds-feat_cont_cred'>
                            <div className='login_right_cred'> Email: Lester Password: four4 </div>
                        </div>
                        <div className='login_right_ds-feat_cont_cred'>
                            <div className='login_right_cred'> Email: Mark Password: five5 </div>
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
                            <input type={ showPassword ? 'text' : 'password' } className='login_left_pw_input' onChange={e => setPassword(e.target.value) } />
                            <div className='login_left_eye' onClick={showHidePassword}>
                                {
                                    showPassword ? 
                                    <div className='login_left_eye'>
                                        <VscEye className='login_left_eye_btn' />
                                    </div>
                                     :
                                    <div className='login_left_eye'>
                                        <VscEyeClosed className='login_left_eye_btn' />
                                    </div>                                    
                                }
                            </div>
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