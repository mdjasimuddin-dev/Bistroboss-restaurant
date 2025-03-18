import MenuItems from "../../../Components/MenuItems";

const MenuCategories = ({ offersItems }) => {
  console.log(offersItems);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:gap-10 lg:my-8">
        {offersItems.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="flex justify-center my-5 lg:my-10">
        <button
          // onClick={() => handleAddtoCart(item)}
          className="btn border-0 uppercase bg-transparent rounded-xl border-b-4 border-[#BB8506] text-xl hover:border-t-4 hover:border-[#BB8506] hover:border-b-0 hover:bg-transparent"
        >
          Order Your Favou rite Food
        </button>
      </div>
    </div>
  );
};

export default MenuCategories;
