import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        className="mx-2 font-semibold text-green-500 text-lg
      "
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className="mx-2 font-semibold text-green-500 text-lg"
        to={"/plants"}
      >
        Plants
      </NavLink>
      <NavLink
        className="mx-2 font-semibold text-green-500 text-lg"
        to={"/profile"}
      >
        My Profile
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-green-100 px-10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="font-bold text-xl text-green-500 sm:text-3xl">
          GreenNest
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/auth/login"
          className="btn bg-gradient-to-l from-[#3b8132] to-[#72bf6a] hover:scale-105 text-white"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
