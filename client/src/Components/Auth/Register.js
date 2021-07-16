import React from 'react';
import LogoV from '../../img/Logo-V.png';
const Register = () => {
  return (
    <div className='register'>
      <div className='container register-content'>
        <div className='register-logo'>
          <img src={LogoV} alt='LogoV' />
        </div>
        <div className='register-form'>
          <form className='add-form' style={{ height: 'auto' }}>
            <h1 style={{ textAlign: 'center', color: 'black' }}>Register</h1>
            <div className='form-control'>
              <label>NAME</label>
              <input type='text' placeholder='Player Name' />
            </div>
            <div className='form-control'>
              <label>PHONE NUMBER</label>
              <input type='text' placeholder='Phone Number' />
            </div>
            <div className='form-control'>
              <label>TEAM NAME</label>
              <input type='text' placeholder='Team Name' />
            </div>
            <div className='form-control'>
              <label>SPORT</label>
              <input type='text' placeholder='Sport' />
            </div>
            <div className='form-control'>
              <label>PASSWORD</label>
              <input type='password' placeholder='Password' />
            </div>
            <div className='form-control'>
              <label>CONFIRM PASSWORD</label>
              <input type='password' placeholder='Confirm Password' />
            </div>
            <button className='btn btn-block'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
