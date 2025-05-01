import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const { user } = useAuth();
  const axiosSecure  = useAxiosSecure();

  const { data: isUser } = useQuery({
      queryKey: [user?.email, 'isUser'],
      queryFn: async () => {
          const res = await axiosSecure.get(`/user/${user.email}`);
          console.log(res.data.user);
          return res.data?.user;
      }
  })
  return [isUser]
};

export default useUser;
