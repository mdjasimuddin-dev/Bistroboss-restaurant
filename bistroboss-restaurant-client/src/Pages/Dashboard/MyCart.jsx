import React from "react";
import useCarts from "../../Hooks/useCarts";
import CartList from "./Components/CartList";
import SectionTitle from "../../Components/SectionTitle";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [carts, refetch] = useCarts();

  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-base-200 p-10 min-h-screen">
      <SectionTitle subTitle="--- My Cart ---" sectionTitle="WANNA ADD MORE?" />

      <div className="bg-white p-10 mt-5 w-2/3 mx-auto">
        <div className=" grid grid-cols-3 text-center font-cinzel text-2xl font-semibold">
          <h1>Total Order : {carts.length}</h1>
          <h1>Total Price : {totalPrice.toFixed(2)}</h1>
          <p>
            {carts.length ? (
              <>
                <Link to="/dashboard/payment" className="btn text-2xl p-5 hover:bg-transparent border-2 border-red-400 bg-red-400 text-white hover:text-red-400">
                  Payment
                </Link>
              </>
            ) : (
              <>
                <button disabled className="btn text-2xl p-5 hover:bg-transparent border-2 border-red-400 bg-red-400 text-white hover:text-red-400">
                  Payment
                </button>
              </>
            )}
          </p>
        </div>

        <div className="grid grid-cols-5 mt-5 bg-[#D1A054] py-5 uppercase text-white font-cinzel text-base font-semibold">
          <h1 className=" text-center w-64">Item image</h1>
          <h1 className="col-span-2 pl-20">Item Name</h1>
          <h1>Price</h1>
          <h1 className="">Action</h1>
        </div>

        {carts.map((item, index) => (
          <CartList items={item} index={index} key={index} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
