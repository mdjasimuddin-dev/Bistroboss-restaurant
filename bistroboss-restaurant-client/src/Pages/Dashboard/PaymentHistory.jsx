import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Components/SectionTitle";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payHistory = [] } = useQuery({
    queryKey: ["payHistory", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/paymentHistory/${user?.email}`);
      console.log(result);
      return result.data;
    },
  });

  return (
    <div className="bg-base-200 p-10">
      <SectionTitle
        subTitle="Your total payment history here. "
        sectionTitle="Payment History"
      />

      <div>
        <div className="grid grid-cols-9 mt-5 bg-[#D1A054] py-5 uppercase text-white font-cinzel text-base font-semibold">
          <h2 className=" text-center w-64">image</h2>
          <h3 className="col-span-2 pl-20">User</h3>
          <h3 className="col-span-2 pl-20">Transaction</h3>
          <h3 className="col-span-2 pl-20">Email</h3>
          <h3>Price</h3>
          <h3 className="">Status</h3>
        </div>

        {payHistory.map((item, index) => (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}

              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <p>{index + 1}</p>
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.transactionID}</td>
                  <td>{item.email}</td>
                  <td> ${item.amount / 100}</td>
                  <td> {item.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
