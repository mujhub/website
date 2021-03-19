import React from "react";
import { Type, H4, H6 } from "../../styles/Shared/StyledTypes";
import { COLOURS, GRAY } from "../../constants/colours/colours";
import { Item, ItemContainer } from "../../styles/components/BookStyles";

const StationarySelector = ({ stationaryData, handleStationarySelect }) => {
  return (
    <div>
      <H6>Stationary</H6>
      <Type>
        Choose the stationery items based on your requirements. The pre-selected
        options are a pack curated by the stationery provider for the labs. Feel
        free to de-select items that you do not need.
      </Type>
      <ItemContainer>
        {stationaryData.map((item, i) => (
          <Item
            selected={item.selected}
            key={item.id}
            onClick={(e) => {
              handleStationarySelect(i);
            }}
          >
            <p>
              {item.name} <br /> x {item.quantity}
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
          </Item>
        ))}
      </ItemContainer>
    </div>
  );
};

export default StationarySelector;
