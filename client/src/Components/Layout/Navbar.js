import React, { Fragment, useContext } from 'react';
import logo from '../../img/Logo-H.png';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/Auth/authContext';

// import Tabs from "./Tabs";
const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout } = authContext;

  const tabs = (
    <div className='tabs'>
      <div className='nav-tabs'>
        <a href='#!'>MY SQUAD</a>
        {/* &nbsp; | &nbsp;
        <a href='#!'>Playing XI</a> */}
      </div>
    </div>
  );

  const onClick = (e) => {
    logout();
  };

  const loggedOut = (
    <Fragment>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </Fragment>
  );

  const loggedIn = (
    <Fragment>
      <Link to='#!' onClick={onClick}>
        Log Out <i class='fas fa-sign-out-alt' />
      </Link>
    </Fragment>
  );

  return (
    <nav className='navigation'>
      <nav className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='nav-auth'>{isAuthenticated ? loggedIn : loggedOut}</div>
      </nav>
      {isAuthenticated && tabs}
    </nav>
  );
};

export default Navbar;
