import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome";
import MyCart from "../Pages/Dashboard/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem";
import Reservation from "../Pages/Dashboard/Reservation";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AddReviews from "../Pages/Dashboard/AddReviews";
import MyBooking from "../Pages/Dashboard/MyBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/menu",
        element: <Menu />,
      },

      {
        path: "/shop",
        element: <Shop />,
      },

      {
        path: "/shop/:category",
        element: <Shop />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children : [
      {
        path : 'home',
        element : <UserHome/>
      },
      {
        path : 'myCarts',
        element : <MyCart/>
      },

      {
        path : "reservation",
        element : <Reservation/>
      },
      {
        path : "paymentHistory",
        element : <PaymentHistory/>
      },
      {
        path : "addReview",
        element : <AddReviews/>
      },
      {
        path : "myBooking",
        element : <MyBooking/>
      },
      {
        path : 'allUsers',
        element : <AllUsers/>
      }
      ,{
        path : 'addItem',
        element : <AddItem/>
      }
    ]
  },
  
]);

export default router;
