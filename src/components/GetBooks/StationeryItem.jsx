import React from "react";
import { Caption } from "../../styles/Shared/StyledTypes";

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
      <Caption selected={item.selected} style={{ fontSize: "12px" }}>
        {item.selected ? "✓ SELECTED" : "✗ NOT SELECTED"}
      </Caption>
    </>
  );
};
