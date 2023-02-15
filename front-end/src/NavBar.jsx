import { Link } from 'react-router-dom';
//import { AiOutlineLogin } from 'react-icons/ai';
import style from './styles/layout/NavBar.module.scss';
import logo from './img/logo.png';

const NavBar = () => {
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
        {/*  <select>
          <option value="Login">
            <Link to="/login">Login</Link>
          </option>
          <option value="SignUp">
            <Link to="/signup">SignUp</Link>
          </option>
          <option value="Profile">
            <Link to="/profile">Profile</Link>
          </option>
          <option value="Logout">
            <Link to="#">SignUp</Link>
          </option>
        </select> */}
        {/* <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className={style.dropdownBasic}
          >
            <AiOutlineLogin />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Login</Dropdown.Item>
            <Dropdown.Item href="#">SignUp</Dropdown.Item>
            <Dropdown.Item href="#">Profile</Dropdown.Item>
            <Dropdown.Item href="#">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </nav>
  );
};

export default NavBar;
