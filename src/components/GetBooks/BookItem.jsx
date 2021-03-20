import React from "react";
import { Caption } from "../../styles/Shared/StyledTypes";
export const BookItem = ({ img, data, isPackSelected }) => {
  return (
    <>
      <img src={img} alt={data.name} srcset="" />
      <div>
        <div className="bookInfo">
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
        <Caption className="selectIndicator" selected={data.selected}>
          ✓ Selected
        </Caption>
      </div>
    </>
  );
};

export const BookItemNotInPack = ({ img, data }) => {
  return (
    <>
      <img src={img} alt={data.name} srcset="" />
      <div className="bookListItem">
        <div className="bookInfo">
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p>
            {`Price: ₹ ${data.price[0]}`}
            {data.price[0] !== data.price[1] ? ` to ₹ ${data.price[1]}` : null}
          </p>
        </div>
        <Caption className="selectIndicator" selected={data.selected}>
          ✅ Selected
        </Caption>
      </div>
    </>
  );
};
