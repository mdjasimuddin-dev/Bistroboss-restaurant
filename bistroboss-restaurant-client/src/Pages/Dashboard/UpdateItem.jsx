import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import { IoIosRestaurant } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const UpdateItem = () => {
  const {name} = useLoaderData();

  console.log(name);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-base-200 p-10 min-h-screen">
      <SectionTitle sectionTitle="Update Item" subTitle="" />

      <div className="flex justify-center w-3/4 mt-5 mx-auto bg-[#F3F3F3]">
        <div className="card p-10 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <fieldset className="fieldset text-xl space-y-3 font-inter">
              <label className="label text-xl font-inter">Recipe name*</label>
              <input
                type="text"
                defaultValue={name}
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

export default UpdateItem;
