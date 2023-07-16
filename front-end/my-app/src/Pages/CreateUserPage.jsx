import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

//import axios from 'axios';
//import { useToken } from '../auth/useToken';

export const CreateUserPage = () => {
 //  const [token, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState('');

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const navigate = useNavigate();
/* 
    const onSignUpClicked = async () => {
        const response = await axios.post('/api/signup', {
            email: emailValue,
            password: passwordValue,
        });
        const { token } = response.data;
        setToken(token);
        navigate('/please-verify');
    } */


    return (
        <div className="page-container">
        <div className="content-container" style={{background: 'linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(222,255,251,1) 0%, rgba(255,197,229,1) 100%)', borderStyle: 'solid', borderWidth: '20px', borderColor: '#f2f2f294'}}>
            <h1>Sign Up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <label style={{ color: '#737373', fontSize: '10px'}}>Enter Email Address</label>

            <input style={{backgroundColor: 'transparent'}}
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com" />
            <label style={{ color: '#737373', fontSize: '10px'}}>Create Password</label>
            <input style={{backgroundColor: 'transparent'}}
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
                <label style={{ color: '#737373', fontSize: '10px'}}>Re-enter Password</label>
            <input style={{backgroundColor: 'transparent'}}
                type="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="password" />
            <hr />
            <button
                disabled={
                    !emailValue || !passwordValue ||
                    passwordValue !== confirmPasswordValue
                }
                >Sign Up</button>
            <button onClick={navigate('/login')}>Already have an account? Log In</button>
        </div>
        </div>
    );
}