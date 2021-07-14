import React from "react";
import logo from "../../img/Logo-H.png";

const Navbar = () => {
  return (
    <nav className='navigation '>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='nav-auth'></div>
      </div>
      <div className='tabs'></div>
    </nav>
  );
};

export default Navbar;
