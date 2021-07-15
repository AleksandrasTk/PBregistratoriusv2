import React from "react";
import LogoV from "../../img/Logo-V.png";

const Landing = () => {
  return (
    <div className='landing'>
      <img src={LogoV} alt='LogoV' />
      <div className='landing-content'>
        <h1>Hey Coach!</h1>
        <p>
          Welcome to a place where you can manage your team and make selections
        </p>
      </div>
    </div>
  );
};

export default Landing;
