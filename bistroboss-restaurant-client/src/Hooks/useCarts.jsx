import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCarts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { refetch, data: carts = [], isLoading } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !!user?.email, // user না থাকলে call করবে না
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart/${user?.email}`);
      return res.data;
    },
  });

  return [carts, refetch, isLoading];
};

export default useCarts;
