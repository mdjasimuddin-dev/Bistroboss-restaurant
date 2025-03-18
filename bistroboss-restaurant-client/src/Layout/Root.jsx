import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/HeaderFooter/Navbar";
import Footer from "../Components/HeaderFooter/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
