import React from "react";
import logo from "../../img/Logo-H.png";

const Navbar = () => {
  return (
    <nav className='navigation'>
      <nav className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='nav-auth'>
          <a href='#!'>Login</a>
          <a href='#!'>Register</a>
        </div>
      </nav>

      <div className='container tabs'>
        <div className='nav-tabs'>
          <a href='#!'>Squad</a> &nbsp; | &nbsp;
          <a href='#!'>PLaying XI</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
