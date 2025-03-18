import { Title } from "react-head";
import Cover from "./../../Components/Cover";
import bgMenu from "./../../assets/menu/banner3.jpg";
import MenuCategories from "./Components/MenuCategories";
import { useEffect, useState } from "react";
import SectionTitle from "./../../Components/SectionTitle";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const offerItems = menu.filter((items) => items.category === "offered");

  return (
    <div>
      <Title> Bistro Boss | Home</Title>
      <Cover
        imgMenu={bgMenu}
        title="Menu"
        description="Would you like to try a dish?"
      />
      <SectionTitle subTitle="---Don't miss---" sectionTitle="Today's offers" />
      <MenuCategories offersItems={offerItems}></MenuCategories>
    </div>
  );
};

export default Menu;
