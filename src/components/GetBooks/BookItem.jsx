import React from "react";
import { Caption } from "../../styles/Shared/StyledTypes";
export const BookItem = ({ img, data, isPackSelected }) => {
  return (
    <>
      <img src={img} alt={data.name} srcset="" />
      <div>
        <div>
          <p style={{ fontWeight: 500 }}>{data.name}</p>
          <p>{data.description}</p>

          {!isPackSelected && (
            <p>
              {`Price: ₹ ${data.price[0]}`}
              {data.price[0] !== data.price[1]
                ? ` to ₹ ${data.price[1]}`
                : null}
            </p>
          )}
        </div>
        <Caption selected={data.selected} style={{ fontSize: "12px" }}>
          {data.selected ? "✓ SELECTED" : "✗ NOT SELECTED"}
        </Caption>
      </div>
    </>
  );
};

export const BookItemNotInPack = ({ img, data }) => {
  return (
    <>
      <img src={img} alt={data.name} srcset="" />
      <div>
        <div>
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p>
            {`Price: ₹ ${data.price[0]}`}
            {data.price[0] !== data.price[1] ? ` to ₹ ${data.price[1]}` : null}
          </p>
        </div>
        <Caption selected={data.selected}>
          {data.selected ? "✓ SELECTED" : "✗ NOT SELECTED"}
        </Caption>
      </div>
    </>
  );
};
