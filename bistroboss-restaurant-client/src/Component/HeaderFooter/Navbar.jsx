import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navbarOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className="uppercase hover:text-red-400 lg:hover:text-[#EEFF25] font-inter font-bold"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className="uppercase  hover:text-red-400 lg:hover:text-[#EEFF25] font-inter font-bold"
        >
          Contact Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className="uppercase hover:text-red-400 lg:hover:text-[#EEFF25] font-inter font-bold"
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/menu"
          className="uppercase  hover:text-red-400 lg:hover:text-[#EEFF25] font-inter font-bold"
        >
          Our Menu
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/shop"
          className="uppercase  hover:text-red-400 lg:hover:text-[#EEFF25] font-inter font-bold "
        >
          Our Shop
          <TiShoppingCart size={32} className="mr-2 relative rounded-full " />
          <p className="absolute w-5 h-5 bg-red-600 text-[10px] text-white lg:text-xs left-28 lg:right-2 rounded-full flex items-center justify-center p-2">
            +2
          </p>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/login"
          className="uppercase hover:text-red-400 lg:hover:text-[#EEFF25] font-inter font-bold"
        >
          Sign In <FaUserCircle size={30} className="font-white" />
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar z-10 text-white shadow-sm bg-black max-w-7xl h-24 top-0 ">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 p-2  shadow"
          >
            {navbarOptions}
          </ul>
        </div>
        <div>
          <a className="lg:btn lg:btn-ghost lg:text-xl uppercase">Bistro Boss</a>
          <p className="tracking-[3px] lg:tracking-[6px]">Restaurant</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex items-center px-1">
          {navbarOptions}
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
