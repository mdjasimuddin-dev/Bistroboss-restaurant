import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import AllUserList from "./Components/AllUserList";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div className="bg-base-200 p-10 h-screen">
      <div className="bg-white p-10 mt-5 w-2/3 mx-auto">
        <div className=" grid grid-cols-2  font-cinzel text-2xl font-semibold">
          <h1 >Total User : {users.length}</h1>
          {/* <h1>Total Price : {totalPrice.toFixed(2)}</h1> */}
          <h3 className="text-end">
            <button className="btn text-2xl hover:bg-transparent border-2 border-red-400 bg-red-400 text-white hover:text-red-400">
              Download
            </button>
          </h3>
        </div>

        <div className="grid grid-cols-5 mt-5 bg-[#D1A054] py-5 uppercase text-white font-cinzel text-base font-semibold">
          <h1 className=" text-center w-64">User image</h1>
          <h1 className="col-span-2 pl-20">User Name</h1>
          <h1>Role</h1>
          <h1 className="">Action</h1>
        </div>

        {users.map((user, index) => (
          <AllUserList key={index} user={user} index={index} refetch={refetch}></AllUserList>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
