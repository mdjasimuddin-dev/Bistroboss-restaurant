import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()

  const handleAddToCart = () => {
    if (user) {
      const cartItem = {
        itemId: _id,
        email: user?.email,
        userName: user?.displayName,
        name,
        description: recipe,
        image,
        price,
      };

      axios
        .post("http://localhost:5000/cart", cartItem)
        .then((data) => {
          console.log(data);
          if (data.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} has been added to cart`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        title: "Are you not Logged In?",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //             // send the user to login page
          navigate("/login", { state: location.pathname })
          // <Navigate
          //   to="/login"
          //   state={location.pathname}
          //   replace={true}
          // ></Navigate>;
        }
      });
    }

    // }
    // else {
    //     Swal.fire({
    //         title: "Are you not Logged In?",
    //         text: "Please login to add to the cart",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, login!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // send the user to login page
    //             navigate("/login", { state: { from: location } })
    //         }
    //     });
    // }
  };

  return (
    <div>
      <div className="bg-[#f3f3f3] shadow-2xl relative my-5 lg:my-10">
        <figure className="">
          <img src={image} alt="Shoes" className="w-full h-[250px] bg-cover" />
        </figure>
        <p className="bg-[#111827] text-white absolute font-bold right-5 top-5 w-16 text-center">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold">{name}</h2>
          <p className="font-light text-base font-inter">
            {recipe.length > 20 ? recipe.slice(0, 80) + "..." : recipe}
          </p>
          <div className="card-actions">
            {/* onClick={() => handleAddtoCart(item)} */}
            <button
              onClick={() => handleAddToCart()}
              className="btn bg-transparent text-[#BB8506] rounded-xl border-b-3 border-[#BB8506] border-0 uppercase text-xl hover:bg-[#e8e8e8] hover:border-b-0 hover:border-t-3"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
