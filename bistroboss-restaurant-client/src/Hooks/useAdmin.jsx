import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user?.email}`);
      console.log("Axios response:", res); // পুরো রেসপন্স দেখতে
      console.log("Admin status:", res.data.admin); // শুধু admin স্টেটাস দেখতে
      return res.data.admin;
    },
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
