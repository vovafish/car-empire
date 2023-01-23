import { Link } from 'react-router-dom';
import logo from './img/logo.png';

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
      </ul>
      <div></div>
    </nav>
  );
};

export default NavBar;
