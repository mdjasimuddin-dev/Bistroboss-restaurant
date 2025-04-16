import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname } replace={true}></Navigate>;
};

export default PrivateRoutes;
