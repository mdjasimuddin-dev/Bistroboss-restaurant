// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const {refetch, data: menu = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      console.log(res);
      return res.data
    },
  });

  // useEffect(() => {
  //   axiosPublic.get("/menu").then((data) => {
  //     setMenu(data.data);
  //     setLoading(false);
  //   });
  // }, []);

  return [menu, refetch];
};

export default useMenu;
