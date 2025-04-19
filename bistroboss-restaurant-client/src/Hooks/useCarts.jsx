import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useCarts = () => {
  const { user } = useAuth();

  const { refetch, data: carts = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !!user?.email, // user না থাকলে call করবে না
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/cart/${user.email}`);
      return res.data;
    },
  });

  return [carts, refetch];
};

export default useCarts;
