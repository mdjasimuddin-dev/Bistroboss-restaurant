import { useEffect, useState } from "react";
import Cover from "../../Components/Cover";
import bgShop from "./../../assets/order/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabItem from "./Components/TabItem";
import { Title } from "react-head";
import { useParams } from "react-router-dom";
import useMenu from "../../Hooks/useMenu";

const Shop = () => {
  const categories = ["salads", "pizza", "soups", "desserts", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category ? category : "salads");
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();


  const dessertItems = menu.filter((items) => items.category === "dessert");
  const pizzaItems = menu.filter((items) => items.category === "pizza");
  const saladItems = menu.filter((items) => items.category === "salad");
  const soupItems = menu.filter((items) => items.category === "soup");
  const drinkItems = menu.filter((items) => items.category === "drinks");

  return (
    <div>
      <Title> Bistro Boss | Our Shop</Title>
      {/* banner section  */}
      <Cover
        bgImage={bgShop}
        title="Our Shop"
        description="Would you like to try a dish?"
      />
      <div className="max-w-screen-xl mx-auto my-5">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
          }}
        >
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drink</Tab>
          </TabList>

          <TabPanel className="my-5">
            <TabItem foodItems={saladItems} />
          </TabPanel>

          <TabPanel>
            <TabItem foodItems={pizzaItems} />
          </TabPanel>

          <TabPanel>
            <TabItem foodItems={soupItems} />
          </TabPanel>

          <TabPanel>
            <TabItem foodItems={dessertItems} />
          </TabPanel>

          <TabPanel>
            <TabItem foodItems={drinkItems} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
