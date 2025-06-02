import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
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
import AdminRoute from "../Router/AdminRoute";
import PrivateRoute from "../Router/PrivateRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/Updateitem";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
    children: [
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },
      {
        path: "myCarts",
        element: <MyCart />,
      },

      {
        path: "payment",
        element : <Payment/>
      },

      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "addReview",
        element: <AddReviews />,
      },
      {
        path: "myBooking",
        element: <MyBooking />,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: <ManageItems />,
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem />,
        loader: ({ params }) =>
          fetch(`https://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
