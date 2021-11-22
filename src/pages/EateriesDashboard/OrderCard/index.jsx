import React, { useState } from "react";
import Axios from "axios";
import { Spin } from "antd";
import { Button } from "../../../styles/Shared/Button";
import { API_URL } from "../../../constants/urls";
import { useAuth } from "../../../contexts/Auth";
import { auth } from "../../../services/firebase";

const OrderCard = ({ uniquekey, orderDetails }) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const updateOrderStatus = async () => {
    try {
      setLoading(true);
      const token = await auth.currentUser.getIdToken();
      const res = await Axios.put(
        `${API_URL}/orders/${orderDetails.orderId}`,
        { status: "ACCEPTED" },
        { headers: { Authorization: "Bearer " + token } }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-2 bg-white rounded-lg p-4 text-left w-full flex justify-between flex-col">
      <div>
        <h4 className="font-semibold my-2">{orderDetails.orderId}</h4>
        <ul>
          {orderDetails.data.items.map((item, index) => (
            <li key={index}>
              <div className="flex gap-6 justify-between">
                <p>{item.name}</p>
                <p>₹ {item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h4 className="font-semibold my-2">Deliver:{orderDetails.data.block}</h4>
      <h4 className="font-semibold my-2">Name: {orderDetails.data.name}</h4>
      <h4 className="font-semibold my-2">Phone: {orderDetails.data.phoneNo}</h4>
      <Button
        disabled={loading}
        className="submitBtn"
        onClick={updateOrderStatus}
      >
        Update
      </Button>
    </div>
  );
};

export default OrderCard;
