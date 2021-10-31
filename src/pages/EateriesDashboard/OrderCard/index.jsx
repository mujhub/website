import React from "react";

const OrderCard = ({ uniquekey, orderDetails }) => {
  const a = 10;
  return (
    <div className="border-2 bg-white rounded-lg p-4 text-left w-full flex justify-between flex-col">
      <div>
        <h4 className="font-semibold my-2">Orders:</h4>
        <ul>
          {orderDetails.items.map((item,index) => (
            <li key={index}>
            <div className="flex gap-6 justify-between">
              <p>{item.name}</p>
              <p>₹ {item.price}</p>
            </div>
          </li>
          ))}
        </ul>
      </div>

      <h4 className="font-semibold my-2">Deliver: {orderDetails.block}</h4>
      <h4 className="font-semibold my-2">Name: {orderDetails.name}</h4>
      <h4 className="font-semibold my-2">Phone: {orderDetails.phoneNo}</h4>
    </div>
  );
};

export default OrderCard;
