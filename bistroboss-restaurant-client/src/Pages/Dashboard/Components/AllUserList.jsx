import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { RiAdminFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUserList = ({ user, index, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDeleteUser = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/user/${id}`)
          .then((result) => {
            console.log(result.data);
            if (result.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const handleUserRole = (id) => {
    axiosSecure
      .patch(`/user/${id}`, { role: "admin" })
      .then((result) => {
        console.log(result);
        if (result?.data?.modifiedCount > 0) {
          Swal.fire({
            title: "Congratulations!",
            text: `${user?.name} now admin`,
            icon: "success",
          });

          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="grid grid-cols-5 my-5 items-center">
        <div className="flex justify-evenly items-center w-64">
          <h3 className="">{index + 1}</h3>
          <img src={user?.photo} className="h-16" alt="Something is wrong" />
        </div>
        <h3 className="px-5 col-span-2 pl-20">{user?.name}</h3>
        <p>
          <button
            onClick={() => handleUserRole(user?._id)}
            className="btn btn-ghost"
          >
            {user?.role === "admin" ? (
              <RiAdminFill size={26}/>
            ) : (
              <FaUsers size={26} onClick={()=>handleUserRole(user?._id, 'admin')} />
            )}
          </button>
          {/* {user?.role === "admin" ? <RiAdminFill /> : <FaUsers size={26} />} */}
        </p>
        <p>
          <button
            onClick={() => handleDeleteUser(user._id)}
            className="btn hover:bg-transparent border-2 border-red-400 bg-red-400 text-white hover:text-red-400"
          >
            <MdDelete size={20} />
          </button>
        </p>
      </div>
    </div>
  );
};

export default AllUserList;
