import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" ">
      <footer className="footer footer-horizontal footer-center bg-green-200 text-green-700 rounded p-10">
        <nav className="grid grid-flow-col gap-4 text-xl font-medium">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebook className="h-6 w-6" />
            </a>
            <a>
              <FaInstagram className="h-6 w-6" />
            </a>
            <a>
              <FaPinterest className="h-6 w-6" />
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-xl">
            Copyright © {new Date().getFullYear()} - All right reserved by Green
            Nest
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
