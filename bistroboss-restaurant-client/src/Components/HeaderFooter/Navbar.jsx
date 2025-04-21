import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
// import { useEffect, useState } from "react";
import { LuLogOut } from "react-icons/lu";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const profilePhoto = user?.photoURL;
  const [cartItem, setCartItem] = useState(0);

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
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/myCarts">
          <TiShoppingCart size={32} className="relative rounded-full " />
          <div className="absolute bg-red-600 w-5 h-5 text-white rounded-full ml-6 mb-5 text-center">
            {cartItem?.length ? cartItem.length : "0"}
          </div>
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className="uppercase hover:text-red-400 lg:hover:text-[#EEFF25] font-inter font-bold"
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <img
              src={profilePhoto}
              alt="profile pic"
              className="rounded-full w-16"
            />
          </li>

          <li>
            <button
              onClick={logout}
              className="btn btn-sm uppercase font-inter font-bold"
            >
              <LuLogOut size={23} className="font-white" />
            </button>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink
              to="/login"
              className="btn ml-5 uppercase hover:text-red-400 lg:hover:text-[#EEFF25] lg:hover:bg-transparent font-inter font-bold"
            >
              Sign In
            </NavLink>
          </li>{" "}
        </>
      )}
    </>
  );

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/${user?.email}`)
      .then((data) => {
        // console.log(data);
        setCartItem(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cartItem]);

  return (
    <div className="navbar fixed z-10 text-white shadow-sm bg-black max-w-7xl h-24 top-0 ">
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
          <Link
            to="/"
            className="btn btn-ghost lg:text-xl uppercase hover:bg-transparent hover:border-none hover:text-white"
          >
            Bistro Boss
          </Link>
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
