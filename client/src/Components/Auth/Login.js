import React, { useEffect, useState, useContext } from "react";
import LogoV from "../../img/Logo-V.png";
import AuthContext from "../../Context/Auth/authContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, error, clearErrors, login } = authContext;

  useEffect(() => {
    if (isAuthenticated) props.history.push("/");
    if (error === "Invalid Password" || error === "Invalid Team") {
      alert("Invalid Credentials");
      clearErrors();
    }
  }, [props.history, clearErrors, isAuthenticated, error]);

  const [coach, setCoach] = useState({
    teamName: "",
    password: "",
  });

  const { teamName, password } = coach;

  const onSubmit = (e) => {
    e.preventDefault();
    if (teamName === "" || password === "") {
      alert("Please enter all credentials");
    } else {
      login({
        teamName,
        password,
      });
    }
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
            onSubmit={onSubmit}
            style={{ height: "400px" }}
          >
            <h1 style={{ textAlign: "center", color: "black" }}>Login</h1>
            <div className='form-control'>
              <label>TEAM NAME</label>
              <input
                type='text'
                placeholder='Team Name'
                value={teamName}
                name='teamName'
                onChange={onChange}
                required
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
                required
              />
            </div>
            <button className='btn btn-block'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
