import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate();

  const onLogInClicked = async () => {
    alert('log in not implemented yet')
  }
  return (
    <div className='page-container'>
    <div className="content-container">
        <h1>Log In</h1>
        {errorMessage && <div>{errorMessage}</div>}
        <input placeholder='youremail@email.com' value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password"
        placeholder='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <hr />
        <button onClick={onLogInClicked} disabled={!email || !password}>Log In</button>
        <button onClick={() => navigate('/forgot-password')}>Forgot your password?</button>
        <button onClick={() => navigate('/signup')}>Don't have an account? Sign up!</button>
        </div>
        </div>
  )
}