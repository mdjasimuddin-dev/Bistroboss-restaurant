import SectionTitle from "../../../Components/SectionTitle";
import FoodCard from "../../../Components/FoodCard";
import useMenu from "../../../Hooks/useMenu";

const Recommends = () => {
  const [menu] = useMenu();

  // const [foodItem, setFoodItem] = useState([]);

  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularMenuItems = data.filter(
  //         (item) => item.category === "popular"
  //       );
  //       setFoodItem(popularMenuItems);
  //     });
  // }, []);

  return (
    <div>
      <SectionTitle
        subTitle={"---Should Try---"}
        sectionTitle={"Chef Recommends"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
        {menu.slice(0, 3).map((data) => (
          <FoodCard key={data._id} item={data}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Recommends;
