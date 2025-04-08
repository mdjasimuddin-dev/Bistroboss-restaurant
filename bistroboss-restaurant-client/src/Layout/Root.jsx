import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/HeaderFooter/Navbar";
import Footer from "../Components/HeaderFooter/Footer";

const Root = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
  return (
    <div className="max-w-7xl mx-auto">
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Root;
