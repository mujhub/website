import React from "react";

const OrderCard = ({ key, orderDetails }) => {
  const a = 10;
  return (
    <div className="border-2 bg-white rounded-lg p-4 text-left w-full flex justify-between flex-col">
      <div>
        <h4 className="font-semibold my-2">Orders:</h4>
        <ul>
          {Object.entries(orderDetails.items).map(([index, itemDetail]) => (
            <li>
              <div className="flex gap-6 justify-between">
                <p>{itemDetail.name}</p>
                <p>₹ {itemDetail.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <h4 className="font-semibold my-2">Deliver: {orderDetails.block}</h4>
    </div>
  );
};

export default OrderCard;
