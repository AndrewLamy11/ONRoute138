// import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";

export default function CreateOrderButton({ companyName, pickupLocation }) {
  useEffect(() => {
    const token = Cookies.get("jwt-authorization");
    console.log(
      "📦 useEffect: Token from cookie in CreateOrderButton.jsx:",
      token
    );
  }, []);
  const handleOrderClick = async () => {
    try {
      const token = Cookies.get("jwt-authorization");
      console.log("Token from cookie on another page:", token); // assumes you store JWT in localStorage
      console.log("Token from cookie:", token);
      if (!token) {
        alert("You are not logged in.");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/order",
        {
          companyName,
          pickupLocation,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // 🔥 Make sure to include this
        }
      );

      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error.response?.data || error);
      alert("Failed to place order.");
    }
  };

  return <button onClick={handleOrderClick}>Order a Load</button>;
}
