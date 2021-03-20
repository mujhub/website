import React from "react";
import { Type, H6 } from "../../styles/Shared/StyledTypes";
import { StationeryItem } from "./StationeryItem";
import { Item, ItemContainer } from "../../styles/components/BookStyles";

const StationerySelector = ({ stationeryData, handleStationerySelect }) => {
  return (
    <div>
      <H6>Stationery</H6>
      <Type>
        Choose the stationery items based on your requirements. The pre-selected
        options are a pack curated by the stationery provider for the labs. Feel
        free to de-select items that you do not need.
      </Type>
      <ItemContainer>
        {stationeryData.map((item, i) => (
          <Item
            isStationery
            selected={item.selected}
            key={item.id}
            onClick={(e) => {
              handleStationerySelect(i);
            }}
          >
            <StationeryItem item={item} />
          </Item>
        ))}
      </ItemContainer>
    </div>
  );
};

export default StationerySelector;
