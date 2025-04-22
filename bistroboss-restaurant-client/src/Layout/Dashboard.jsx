import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdHome, IoMdMenu } from "react-icons/io";
import { MdEmail, MdOutlineRestaurant } from "react-icons/md";
import {
  FaBook,
  FaCalendarAlt,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { RiCurrencyFill } from "react-icons/ri";
import { GiStarsStack } from "react-icons/gi";

const Dashboard = () => {
  const isAdmin = true;

  return (
    <div className="flex">
      {/* left side  */}
      <div className="w-72 bg-[#D1A054] min-h-screen px-4 py-10">
        <div className="">
          <h1 className="font-cinzel text-2xl text-black font-bold uppercase">
            Bistro Boss
          </h1>
          <p className="text-base font-bold font-cinzel tracking-[6px]">
            Restaurant
          </p>
        </div>

        <ul className="mt-16 space-y-8">
          {/* Admin Dashboard Route  */}
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <IoMdHome size={26} className="mr-3" />
                  Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <MdOutlineRestaurant size={26} className="mr-3" />
                  Add Items
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <FaList size={26} className="mr-3" />
                  Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/mangeBookings"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <FaBook size={26} className="mr-3" />
                  Manage Bookings
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <FaUsers size={26} className="mr-3" />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <IoMdHome size={26} className="mr-3" />
                  User Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <FaCalendarAlt size={26} className="mr-3" />
                  Reservation
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <RiCurrencyFill size={26} className="mr-3" />
                  Payment History
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/myCarts"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <FaShoppingCart size={26} className="mr-3" />
                  My Cart
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <GiStarsStack size={26} className="mr-3" />
                  Add Review
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/reservation"
                  className="flex items-center text-base uppercase font-cinzel font-bold"
                >
                  <RiCurrencyFill size={26} className="mr-3" />
                  My Booking
                </NavLink>
              </li>
            </>
          )}
        </ul>

        <hr className=" text-white my-8" />

        {/* General route  */}
        <ul className=" space-y-8">
          <li>
            <NavLink
              to="/"
              className="flex items-center text-base uppercase font-cinzel font-bold"
            >
              <IoMdHome size={26} className="mr-3" />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              className="flex items-center text-base uppercase font-cinzel font-bold"
            >
              <IoMdMenu size={26} className="mr-3" />
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className="flex items-center text-base uppercase font-cinzel font-bold"
            >
              <FaShoppingBag size={26} className="mr-3" />
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="flex items-center text-base uppercase font-cinzel font-bold"
            >
              <MdEmail size={26} className="mr-3" />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* right side  */}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
