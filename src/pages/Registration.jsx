import React from "react";
import { Link } from "react-router";

const Registration = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body bg-green-50">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Your Name" />
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Your Photo URL" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Your Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <Link to={"/auth/login"}>
            Already Have an Account ?{" "}
            <span className="text-green-500">Log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
