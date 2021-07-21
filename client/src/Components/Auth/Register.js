import React, { useState, useEffect, useContext } from "react";
import LogoV from "../../img/Logo-V.png";
import AuthContext from "../../Context/Auth/authContext";

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, error, clearErrors, Register } = authContext;

  useEffect(() => {
    if (isAuthenticated) props.history.push("/");
    if (error === "Team already exists, Please choose another team name") {
      alert("Team name already exists");
      clearErrors();
    }
  }, [props.history, clearErrors, isAuthenticated, error]);

  const [coach, setCoach] = useState({
    name: "",
    phone: "",
    teamName: "",
    sport: "",
    password: "",
    password2: "",
  });

  const { name, phone, teamName, sport, password, password2 } = coach;

  const onSubmit = (e) => {
    e.preventDefault();
    Register({
      name,
      phone,
      teamName,
      sport,
      password,
    });
  };

  const onChange = (e) => {
    setCoach({
      ...coach,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='register'>
      <div className='container register-content'>
        <div className='register-logo'>
          <img src={LogoV} alt='LogoV' />
        </div>
        <div className='register-form'>
          <form
            className='add-form'
            style={{ height: "auto" }}
            onSubmit={onSubmit}
          >
            <h1 style={{ textAlign: "center", color: "black" }}>Register</h1>
            <div className='form-control'>
              <label>NAME</label>
              <input
                type='text'
                placeholder='Name'
                value={name}
                name='name'
                onChange={onChange}
              />
            </div>
            <div className='form-control'>
              <label>PHONE NUMBER</label>
              <input
                type='text'
                placeholder='Phone Number'
                value={phone}
                name='phone'
                onChange={onChange}
              />
            </div>
            <div className='form-control'>
              <label>TEAM NAME</label>
              <input
                type='text'
                placeholder='Team Name'
                value={teamName}
                name='teamName'
                onChange={onChange}
              />
            </div>
            <div className='form-control'>
              <label>SPORT</label>
              <input
                type='text'
                placeholder='Sport'
                value={sport}
                name='sport'
                onChange={onChange}
              />
            </div>
            <div className='form-control'>
              <label>PASSWORD</label>
              <input
                type='password'
                placeholder='Password'
                value={password}
                name='password'
                onChange={onChange}
              />
            </div>
            <div className='form-control'>
              <label>CONFIRM PASSWORD</label>
              <input
                type='password'
                placeholder='Confirm Password'
                value={password2}
                name='password2'
                onChange={onChange}
              />
            </div>
            <button className='btn btn-block'>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
