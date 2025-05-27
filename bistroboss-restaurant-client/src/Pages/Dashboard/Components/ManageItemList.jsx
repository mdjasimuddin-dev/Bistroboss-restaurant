import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageItemList = ({ index, items, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
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
          .delete(`/deleteMenuItem/${id}`)
          .then((result) => {
            console.log(result);
            if (result.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Menu item has been deleted.",
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

  return (
    <div className="grid grid-cols-6 my-5">
      <div className="flex justify-evenly w-64">
        <h3 className="">{index + 1}</h3>
        <img src={items?.image} className="h-20" alt="Something is wrong" />
      </div>
      <h3 className="px-5 col-span-2 pl-20">{items?.name}</h3>
      <h3 className="">{items?.price}</h3>
      <p>
        <Link
          to={`/dashboard/updateItem/${items._id}`}
          className="btn hover:bg-transparent border-2 border-red-400 bg-red-400 text-white hover:text-red-400"
        >
          <FaEdit size={20} />
        </Link>
      </p>
      <p>
        <button
          onClick={() => handleDelete(items._id)}
          className="btn hover:bg-transparent border-2 border-red-400 bg-red-400 text-white hover:text-red-400"
        >
          <MdDelete size={20} />
        </button>
      </p>
    </div>
  );
};

export default ManageItemList;
