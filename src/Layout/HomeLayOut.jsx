import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const HomeLayOut = () => {
  return (
    <div className="bg-green-50">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default HomeLayOut;
