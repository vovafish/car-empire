import { Link } from 'react-router-dom';
import style from './styles/layout/NavBar.module.scss';
import logo from './img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useToken } from './auth/useToken';

const NavBar = () => {
  const [token, setToken] = useToken();
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
    /* window.location.reload();
    return false; */
  };

  const logIn = () => {
    navigate('/login');
    /* window.location.reload();
    return false; */
  };
  //console.log(token);
  return (
    <nav>
      <div className={style.logoSite}>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/additional-item">Additional Items</Link>
        </li>
        <li>
          <Link to="/return-vehicle">Return Car</Link>
        </li>
      </ul>
      <div>
        {token ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={logIn}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
