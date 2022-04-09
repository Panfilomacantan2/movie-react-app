import React from "react";

const Login = () => {
  return (
    <div className="form_wrapper">
      <form className="login_form">
        <h3>Login</h3>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form_control" />
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form_control" />
        </div>
        <div className="form_group">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
