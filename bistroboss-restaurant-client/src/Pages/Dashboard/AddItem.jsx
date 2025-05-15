import SectionTitle from "../../Components/SectionTitle";
import { IoIosRestaurant } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

// image hosting process
// step-01 : .env file has been hosting key
// step-02 : backend cors policy defined
// step-03 : Follow the bellow code structure
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    // const imageFile = { image: data.image[0] };
    try {
      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: false,
      });

      // console.log(res.data); // Image hosting API response
      if (res.data.success) {
        const menuItem = {
          name: data.recipe,
          recipe: data.details,
          price: data.price,
          category: data.category,
          image: res.data.data.image["url"],
        };

        console.log(menuItem, res.data);
        await axiosSecure.post("/addItem", menuItem).then((data) => {
          console.log(data);
          if (data?.data?.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to Database.`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    } catch (error) {
      console.error("Error uploading image or adding item:", error);
    }
    // console.log(res.data);
  };

  return (
    <div className="bg-base-200 p-10 min-h-screen">
      <SectionTitle sectionTitle="Add an Item" subTitle="What's new?" />

      <div className="flex justify-center w-2/3 mt-5 mx-auto bg-[#F3F3F3]">
        <div className="card p-10 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset text-xl space-y-3 font-inter">
              <label className="label text-xl font-inter">Recipe name*</label>
              <input
                type="text"
                {...register("recipe", { required: true })}
                className="input w-full p-2"
                placeholder="Recipe name"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-3">
                  <label className="label">Category</label> <br />
                  <select
                    {...register("category", { required: true })}
                    id=""
                    defaultValue={"salad"}
                    className="w-full bg-white p-2 text-lg"
                  >
                    <option disabled>Select Category</option>
                    <option value="salad">Salad</option>
                    <option value="dessert">Dessert</option>
                    <option value="soup">Soup</option>
                    <option value="pizza">Pizza</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="label">Price</label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    className="input w-full"
                    placeholder="Product Price"
                  />
                </div>
              </div>
              <label className="label">Recipe Details</label>
              <textarea
                {...register("details", { required: true })}
                id=""
                className="bg-white min-h-32"
              ></textarea>

              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input "
              />

              <button
                type="submit"
                className=" w-48 p-5 text-xl btn bg-linear-to-r from-[#835D23] to-[#B58130] mt-4 text-white"
              >
                Add Item <IoIosRestaurant size={25} />
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
