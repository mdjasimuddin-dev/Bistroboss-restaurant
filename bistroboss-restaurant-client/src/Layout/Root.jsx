import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/HeaderFooter/Navbar";
import Footer from "../Component/HeaderFooter/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
