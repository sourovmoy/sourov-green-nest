import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="card bg-green-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <Link to={"/auth/signup"}>
            Create New Account ?{" "}
            <span className="text-green-500">Registration</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
