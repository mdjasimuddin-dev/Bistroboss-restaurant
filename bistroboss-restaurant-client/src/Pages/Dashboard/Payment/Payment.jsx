import SectionTitle from "../../../Components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Geteway_PK);
  return (
    <div>
      <SectionTitle
        sectionTitle="Payment"
        subTitle={"Please do you payment and book confirm."}
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>

      {/* <Checkout stripe={stripePromise}></Checkout> */}
    </div>
  );
};

export default Payment;
