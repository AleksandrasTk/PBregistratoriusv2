import React from 'react';
import LogoV from '../../img/Logo-V.png';
const Login = () => {
  return (
    <div className='register'>
      <div className='container register-content'>
        <div className='register-logo'>
          <img src={LogoV} alt='LogoV' />
        </div>
        <div className='register-form'>
          <form className='add-form' style={{ height: '400px' }}>
            <h1 style={{ textAlign: 'center', color: 'black' }}>Login</h1>
            <div className='form-control'>
              <label>TEAM NAME</label>
              <input type='text' placeholder='Team Name' />
            </div>
            <div className='form-control'>
              <label>PASSWORD</label>
              <input type='password' placeholder='password' />
            </div>
            <button className='btn btn-block'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
