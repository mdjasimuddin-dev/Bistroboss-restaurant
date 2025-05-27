import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useCarts from "../../../Hooks/useCarts";
import { useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [myError, setError] = useState("");
  const [carts] = useCarts();
  const axiosSecure = useAxiosSecure();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.post("/paymentIntent", { price: totalPrice }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment Error", error);
      setError(error);
    } else {
      console.log("Payment Method", paymentMethod);
      setError(" ");
    }

    // confirm card payment

    const { paymentIntent, confirm_error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      }
    );

    if (confirm_error) {
      console.log("Payment process failed");
    } else {
      console.log("Payment Success", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        // payment info save in database

        const paymentInfo = {
          name: user?.displayName,
          email: user?.email,
          amount: paymentIntent.amount,
          transactionID: paymentIntent.id,
          paymentType: paymentIntent.payment_method_types,
          item_quantity: carts.length,
          cartID: carts.map((item) => item._id),
          menuID: carts.map((item) => item.itemId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", paymentInfo);
        console.log(res);

        if (res.data.result.insertedId) {
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <button className="btn" type="submit" disabled={!stripe || !clientSecret}>
        Payment
      </button>

      <p className="text-red-600">{myError}</p>
    </form>
  );
};

export default Checkout;
