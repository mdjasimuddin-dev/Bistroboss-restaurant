import SectionTitle from "../../../Components/SectionTitle";
import MenuItems from "../../../Components/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const MenuSection = () => {
  const [menu] = useMenu();

  const popularMenuItems = menu.filter((item) => item.category === "popular");


  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularMenuItems = data.filter(
  //         (item) => item.category === "popular"
  //       );
  //       setMenuItem(popularMenuItems);
  //     });
  // }, []);

  return (
    <div>
      {/* section heading & subheading  */}
      <SectionTitle
        subTitle="---Check it out---"
        sectionTitle="From Our Menu"
      ></SectionTitle>

      {/* popular item menu item section section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:my-8">
        {popularMenuItems.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>

      <div className="flex justify-center my-5 lg:my-10">
        <button
          // onClick={() => handleAddtoCart(item)}
          className="btn border-0 uppercase bg-transparent rounded-xl border-b-4 border-[#BB8506] text-xl hover:border-t-4 hover:border-[#BB8506] hover:border-b-0 hover:bg-transparent"
        >
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
