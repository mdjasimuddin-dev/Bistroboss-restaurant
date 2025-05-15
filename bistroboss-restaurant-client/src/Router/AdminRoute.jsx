import { useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";



const AdminRoute = ({children}) => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location);

    if (loading || isAdminLoading) {
        return <div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>
    }

    if (user && isAdmin) {
        return children;
    } else {
        return <Navigate to={location.state? location?.state : '/'} replace />;
    }


};

export default AdminRoute;