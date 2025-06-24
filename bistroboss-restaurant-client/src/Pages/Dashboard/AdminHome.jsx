import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  console.log(user);

  const { data: myData = {} } = useQuery({
    queryKey: ["myData"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/web-summarize");
      console.log(res);
      return res.data;
    },
  });


    const { data: webOrders = [] } = useQuery({
    queryKey: ["webOrders"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/web-orderStarts");
      console.log(res);
      return res.data;
    },
  });

  console.log(webOrders);
  

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };





  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = webOrders.map(data => {
        return {name: data.category, value: data.revinew}
    })


  return (
    <div className="space-y-10">
      <h1 className="text-5xl font-bold font-cinzel">
        Hi, Welcome Boss,{" "}
        <span className="text-green-600">
          {user?.displayName ? user?.displayName : "Back"}
        </span>
      </h1>
      <div className="grid grid-cols-4 gap-10">
        <div className="h-40 bg-gradient-to-l from-[#FCDBFF] to-[#BB34F5] flex flex-col justify-center items-center">
          <h3 className="text-3xl font-bold font-inter text-black">
            Total Order : {myData.orderCount > 0 ? myData.orderCount : "0"}
          </h3>
          {/* <p className="text-3xl font-bold font-inter text-white"></p> */}
        </div>
        <div className="h-40 bg-gradient-to-l from-[#c4f5cc] to-[#04b922] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold font-inter text-black">
            Total Sale : ${myData.totalSale > 0 ? myData.totalSale : "0"}
          </h1>
        </div>
        <div className="h-40 bg-gradient-to-l from-[#FDE8C0] to-[#D3A256] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold font-inter text-black">
            Total Menu : {myData.menu > 0 ? myData.menu : "0"}
          </h1>
        </div>
        <div className="h-40 bg-gradient-to-l from-[#FECDE9] to-[#FE4880] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold font-inter text-black">
            Total Users : {myData.users > 0 ? myData.users : "0"}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 h-[500px]">
        <div className="w-1/2 mx-auto flex flex-col justify-center items-center">
          <BarChart
            width={500}
            height={300}
            data={webOrders}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {webOrders.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        <div className="p-10 w-1/2 mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={800} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
