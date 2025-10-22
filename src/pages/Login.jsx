import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const {
    signInWithEmailAndPasswordFunc,
    setUser,
    setError,
    error,
    user,
    setSpinner,
  } = use(AuthContext);
  const handelSignin = (e) => {
    setUser(null);
    setError("");
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Successfully Sign Up");
        e.target.reset();
        setSpinner(false);
      })
      .catch((err) => setError(err.message));
    console.log(email, password);
  };
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="card bg-green-50 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className="text-3xl font-bold text-center text-green-500">
            Login
          </h3>
          <form onSubmit={handelSignin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Your Email"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <button className="btn bg-gradient-to-r from-[#3b8132] to-[#72bf6a] hover:scale-105 mt-4">
                Login
              </button>
            </fieldset>
          </form>
          <Link to={"/auth/signup"}>
            Create New Account ?{" "}
            <span className="text-green-500">Registration</span>
          </Link>
          {user && <p className="text-green-500">Successfully Sign In</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
