import { Title } from "react-head";
import bgMenu from "./../../assets/menu/banner3.jpg";
import bgDessert from "./../../assets/menu/dessert-bg.jpeg";
import bgPizza from "./../../assets/menu/pizza-bg.jpg";
import bgSalad from "./../../assets/menu/salad-bg.jpg";
import bgSoup from "./../../assets/menu/soup-bg.jpg";
import bgDrink from "./../../assets/menu/drink-bg.jpeg";
import MenuCategories from "./Components/MenuCategories";
import { useEffect, useState } from "react";
import Cover from "../../Components/Cover";
import SectionTitle from "./../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";

const Menu = () => {
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("./menu.json")
  //     .then((res) => res.json())
  //     .then((data) => setMenu(data));
  // }, []);

  const [menu] = useMenu()

  const offerItems = menu.filter((items) => items.category === "offered");
  const dessertItems = menu.filter((items) => items.category === "dessert");
  const pizzaItems = menu.filter((items) => items.category === "pizza");
  const saladItems = menu.filter((items) => items.category === "salad");
  const soupItems = menu.filter((items) => items.category === "soup");
  const drinkItems = menu.filter((items) => items.category === "drinks");

  return (
    <div>
      <Title> Bistro Boss | Menu</Title>

      {/* banner section  */}
      <Cover
        bgImage={bgMenu}
        title="Our Menu"
        description="Would you like to try a dish?"
      />
      {/* offer section  */}
      <SectionTitle subTitle="---Don't miss---" sectionTitle="Today's offers" />
      {/* favorites items */}
      <MenuCategories items={offerItems}></MenuCategories>

      {/* Dessert Menu Items Section  */}
      <MenuCategories
        items={dessertItems}
        img={bgDessert}
        title="desserts"
        description="Intrinsicly provide access to timely e-services with fully researched potentialities."
      ></MenuCategories>

      <MenuCategories
        items={pizzaItems}
        img={bgPizza}
        title="pizza"
        description="Intrinsicly provide access to timely e-services with fully researched potentialities."
      ></MenuCategories>

      <MenuCategories
        items={saladItems}
        img={bgSalad}
        title="salads"
        description="Intrinsicly provide access to timely e-services with fully researched potentialities."
      ></MenuCategories>

      <MenuCategories
        items={soupItems}
        img={bgSoup}
        title="soups"
        description="Intrinsicly provide access to timely e-services with fully researched potentialities."
      ></MenuCategories>

      <MenuCategories
        items={drinkItems}
        img={bgDrink}
        title="drink"
        description="Intrinsicly provide access to timely e-services with fully researched potentialities."
      ></MenuCategories>
    </div>
  );
};

export default Menu;
