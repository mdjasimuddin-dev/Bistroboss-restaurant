import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import ManageItemList from "./Components/ManageItemList";



const ManageItems = () => {

    const [menu, refetch] = useMenu()
    return (
        <div className="bg-base-200 p-10 min-h-screen">
            <SectionTitle sectionTitle="Manage All Items" subTitle="Hurry Up"></SectionTitle>

            <div className="bg-white p-10 mt-5 w-3/4 mx-auto">
                    <div className=" grid grid-cols-3 text-center font-cinzel text-2xl font-semibold">
                      <h1>Total Menu Item : {menu.length}</h1>
                    </div>
            
                    <div className="grid grid-cols-6 mt-5 bg-[#D1A054] py-5 uppercase text-white font-cinzel text-base font-semibold">
                      <h1 className=" text-center w-64">Item image</h1>
                      <h1 className="col-span-2 pl-20">Item Name</h1>
                      <h1>Price</h1>
                      <h3 className="">Action</h3>
                      <h1 className="">Action</h1>
                    </div>
            
                    {menu.map((item, index) => (
                      <ManageItemList items={item} index={index} key={index} refetch={refetch} />
                    ))}
                  </div>
            
        </div>
    );
};

export default ManageItems;