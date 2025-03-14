
const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;

  // const handleAddtoCart = (food) => {
  //     if (user && user.email) {
  //         //TODO : cart item data store database
  //         const cartItem = {
  //             menuId: _id,
  //             email: user.email,
  //             name,
  //             recipe,
  //             image,
  //             price
  //         }
  //         axiosSecure.post("/carts", cartItem)
  //             .then(data => {
  //                 console.log(data.data)
  //                 if (data.data.insertedId) {
  //                     Swal.fire({
  //                         position: "top-end",
  //                         icon: "success",
  //                         title: `${name} has been added to cart`,
  //                         showConfirmButton: false,
  //                         timer: 1500
  //                     });

  //                     refetch()
  //                 }
  //             })
  //             .catch(err => { console.log(err) })
  //     }
  //     else {
  //         Swal.fire({
  //             title: "Are you not Logged In?",
  //             text: "Please login to add to the cart",
  //             icon: "warning",
  //             showCancelButton: true,
  //             confirmButtonColor: "#3085d6",
  //             cancelButtonColor: "#d33",
  //             confirmButtonText: "Yes, login!"
  //         }).then((result) => {
  //             if (result.isConfirmed) {
  //                 // send the user to login page
  //                 navigate("/login", { state: { from: location } })
  //             }
  //         });
  //     }
  // }

  return (
    <div>
      <div className="bg-[#f3f3f3] shadow-2xl my-5 lg:my-10">
        <figure className="relative">
          <img
            src={image}
            alt="Shoes"
            className="w-full h-[250px] bg-cover"
          />
        </figure>
        <p className="bg-[#111827] text-white absolute font-bold right-5 top-5 w-16 text-center">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold">{name}</h2>
          <p className="font-light text-base font-inter">{recipe.length > 20 ? recipe.slice(0, 80) + "..." : recipe}</p>
          <div className="card-actions">
            {/* onClick={() => handleAddtoCart(item)} */}
            <button className="btn bg-transparent text-[#BB8506] rounded-xl border-b-3 border-[#BB8506] border-0 uppercase text-xl hover:bg-[#e8e8e8] hover:border-b-0 hover:border-t-3">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
