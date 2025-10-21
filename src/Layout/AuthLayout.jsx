import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
