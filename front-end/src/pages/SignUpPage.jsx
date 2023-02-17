import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../pages/SignUpPage.module.scss';

const SignUpPage = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const onSignUpClicked = async () => {
    alert('SignUp');
  };
  return (
    <div className="mainContainer">
      <main className={style.main}>
        <h1 className="main-title">Sign Up Page</h1>
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
          <input
            value={confirmPasswordValue}
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button
            disabled={
              !emailValue ||
              !passwordValue ||
              !passwordValue !== confirmPasswordValue
            }
            onClick={onSignUpClicked}
          >
            Sign Up
          </button>
          <button onClick={() => navigate('/login')}>
            Already have an account? Log In.
          </button>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
