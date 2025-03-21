import FoodCard from "../../../Components/FoodCard";

const TabItem = ({ foodItems }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
      {foodItems.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default TabItem;
