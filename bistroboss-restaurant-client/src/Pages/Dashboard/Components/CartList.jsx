import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CartList = ({ items, index, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (id) => {
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
          .delete(`/delete/${id}`)
          .then((result) => {
            console.log(result);
            if (result.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
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
    <div>
      <div className="grid grid-cols-5 my-5">
        <div className="flex justify-evenly w-64">
          <h3 className="">{index + 1}</h3>
          <img src={items?.image} className="h-20" alt="Something is wrong" />
        </div>
        <h3 className="px-5 col-span-2 pl-20">{items?.name}</h3>
        <h3 className="">{items?.price}</h3>
        <p>
          <button
            onClick={() => handleDeleteItem(items._id)}
            className="btn hover:bg-transparent border-2 border-red-400 bg-red-400 text-white hover:text-red-400"
          >
            <MdDelete size={20} />
          </button>
        </p>
      </div>
    </div>
  );
};

export default CartList;
