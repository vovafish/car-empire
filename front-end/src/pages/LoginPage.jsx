import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import style from '../pages/LoginPage.module.scss';

const LoginPage = () => {
  const [token, setToken] = useToken();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const onLogInClicked = async () => {
    const response = await axios.post('/api/login', {
      email: emailValue,
      password: passwordValue,
    });

    const { token } = response.data;
    setToken(token);
    navigate('/');
  };
  return (
    <div className="mainContainer">
      <main className={style.main}>
        <h1 className="main-title">Login Page</h1>
        {errorMessage && <div className="fail">{errorMessage}</div>}
        <div className={style.form}>
          <input
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="someone@gmail.com"
          />
          <input
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button
            disabled={!emailValue || !passwordValue}
            onClick={onLogInClicked}
          >
            Login
          </button>
          <button onClick={() => navigate('/forgot-password')}>
            Forgot password?
          </button>
          <button onClick={() => navigate('/signup')}>
            Don't have an account? Sign Up
          </button>
        </div>
      </main>
    </div>
  );
};
export default LoginPage;
