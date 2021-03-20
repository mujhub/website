import React from "react";
export const StationeryItem = ({ item }) => {
  return (
    <>
      <p>
        {item.name} x {item.quantity}
      </p>

      {typeof item.price === "object" ? (
        <>
          <p style={{ textDecoration: "line-through", marginRight: 10 }}>
            Rs.{item.price[0]}
          </p>
          <p>Rs.{item.price[1]}</p>
        </>
      ) : (
        <p>Rs.{item.price}</p>
      )}
    </>
  );
};
