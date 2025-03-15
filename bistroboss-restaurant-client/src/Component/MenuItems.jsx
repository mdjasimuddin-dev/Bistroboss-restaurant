const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div className="text-start">
        <h2 className="uppercase text-xl font-cinzel">{name}</h2>
        <p className="text-base font-inter font-light">{recipe}</p>
      </div>
      <p className="text-xl flex justify-end md:justify-center lg:justify-end flex-grow text-[#BB8506] font-bold">
        ${price}
      </p>
    </div>
  );
};

export default MenuItems;
