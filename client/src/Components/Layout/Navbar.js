import React, { Fragment } from "react";
import logo from "../../img/Logo-H.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    // <nav className='navigation'>
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-auth">
        <Fragment>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Fragment>
      </div>
    </nav>

    //  <div className='tabs'>
    //   <div className='nav-tabs'>
    //     <a href='#!'>Squad</a> &nbsp; | &nbsp;
    //     <a href='#!'>Playing XI</a>
    //   </div>
    // </div> */
    // </nav>
  );
};

export default Navbar;
