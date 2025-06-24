import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";

const axiosSecure = axios.create({
  baseURL: "https://bistroboss-restaurant-server.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("BistroBoss");
      // console.log("Stopped your work, Plz show your identity");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      // error 401 || 403
      const status = error.response.status;

      if (status === 401 || status === 403) {
        console.log("Interceptors Detect", error.response.data.message);
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
