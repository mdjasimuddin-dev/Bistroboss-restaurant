import { Link } from "react-router-dom";
import Cover from "../../../Components/Cover";
import MenuItems from "../../../Components/MenuItems";

const MenuCategories = ({ items, img, title }) => {
  return (
    <div>
      {title && (
        <Cover
          bgImage={img}
          title={title}
          description="Phosfluorescently revolutionize installed base services before client-centric users. Objectively extend."
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:gap-10 lg:my-8">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>

      {/* button  */}
      <div className="flex justify-center my-5 lg:my-10">
        <Link
          to={`/shop/${title ? title : "salads"}`}
          className="btn border-0 uppercase bg-transparent rounded-xl border-b-4 border-[#BB8506] text-xl hover:border-t-4 hover:border-[#BB8506] hover:border-b-0 hover:bg-transparent"
        >
          Order Your Favorite Food
        </Link>
      </div>
    </div>
  );
};

export default MenuCategories;
