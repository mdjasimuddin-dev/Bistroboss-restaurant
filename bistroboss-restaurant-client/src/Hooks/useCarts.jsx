import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useCarts = () => {
  const { user } = useAuth();
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/${user?.email}`)
      .then((data) => {
        setCarts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [carts]);

  return [carts];
};

export default useCarts;
