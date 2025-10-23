import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutFunc, setUser, spinner } = use(AuthContext);

  const handelSignOut = () => {
    signOutFunc();
    toast("Sign Out Successfully");
    setUser(null);
  };

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
      {user && (
        <NavLink
          className="mx-2 font-semibold text-green-500 text-lg"
          to={"/booked"}
        >
          Booked plants
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-green-100 px-5 shadow-sm">
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
      <div className="navbar-end items-center">
        {spinner ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : user ? (
          <button
            onClick={handelSignOut}
            className="btn bg-gradient-to-l from-[#3b8132] to-[#72bf6a] hover:scale-105 text-white"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-gradient-to-l from-[#3b8132] to-[#72bf6a] hover:scale-105 text-white"
          >
            Log in
          </Link>
        )}

        {user ? (
          <div className="dropdown dropdown dropdown-end ml-2">
            <div tabIndex={0} role="button" className=" rounded-full">
              <img
                className="rounded-full object-fill h-10 w-11 outline-5 outline-green-200"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu text-white font-semibold bg-gradient-to-r from-[#3b8132] to-[#72bf6a] rounded-box z-1 w-56 p-2 shadow-sm"
            >
              <h2 className="shadow-lg py-2 px-1 rounded-lg mb-2">
                {user?.displayName}
              </h2>
              <p className="shadow-lg py-2 px-1 rounded-lg">{user?.email}</p>
            </ul>
          </div>
        ) : (
          <FaUserCircle className="ml-2 h-10 w-10" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
