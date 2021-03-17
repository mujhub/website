import React from "react";

import { H6, Type } from "../../styles/Shared/StyledTypes";
import {
  Item,
  ItemContainer,
  FormSection,
} from "../../styles/components/BookStyles";
import { COLOURS, GRAY } from "../../constants/colours/colours";

const BooksSelector = ({
  booksData,
  handleBookSelect,
  isPackSelected,
  additionalBooks,
  handleAdditionalBooksChange,
}) => {
  return (
    <>
      <H6>Books</H6>
      <Type>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Type>
      <ItemContainer isPackSelected={isPackSelected}>
        {booksData.map(
          (data, i) =>
            data.isPack && (
              <Item
                selected={data.selected}
                key={data.id}
                onClick={() => {
                  handleBookSelect(i);
                }}
              >
                <p>{data.name}</p>
                <p>{data.description}</p>
                <p>{!isPackSelected && `Price: ${data.price}`}</p>
              </Item>
            )
        )}
      </ItemContainer>
      <ItemContainer>
        {booksData.map(
          (data, i) =>
            !data.isPack && (
              <Item
                key={data.id}
                selected={data.selected}
                onClick={() => {
                  handleBookSelect(i);
                }}
              >
                <p>{data.name}</p>
                <p>{data.description}</p>
                <p>Price: {data.price}</p>
              </Item>
            )
        )}
      </ItemContainer>
      <FormSection>
        <label className="additionalBooksLable">
          Additional Books (subject to availability) :
        </label>
        <textarea
          rows="10"
          cols="50"
          name="menu"
          placeholder="Ex: Engineering Mathematics - Rammanna"
          value={additionalBooks}
          onChange={handleAdditionalBooksChange}
        />
      </FormSection>
    </>
  );
};

export default BooksSelector;
