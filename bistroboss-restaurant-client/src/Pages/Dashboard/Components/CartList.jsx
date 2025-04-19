import axios from "axios";
import { MdDelete } from "react-icons/md";

const CartList = ({ items, index, refetch }) => {
  const handleDeleteCart = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((result) => {
        console.log(result);
        refetch();
      })
      .catch((err) => {
        console.log(err);
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
            onClick={() => handleDeleteCart(items._id)}
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
