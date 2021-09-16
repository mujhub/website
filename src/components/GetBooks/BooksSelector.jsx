import React, { useState } from "react";

import { H6, Type, Caption } from "../../styles/Shared/StyledTypes";
import {
  Item,
  ItemContainer,
  FormSection,
  PriceSection,
} from "../../styles/components/BookStyles";

import { BookItem, BookItemNotInPack } from "./BookItem";

const BooksSelector = ({
  booksData,
  handleBookSelect,
  isPackSelected,
  additionalBooks,
  handleAdditionalBooksChange,
  booksPrice,
}) => {
  const [additionalTick, setAdditionalTick] = useState(false);
  return (
    <>
      <H6>Books</H6>
      <Type>
        Choose from a variety of books curated as a pack by the book provider
        based on your study cycle. Once you're done with using the books for the
        semester, return the books and receive a partial refund as stated below.
        <br />
        <br />
        You may tap on the cards to add/remove books from your order.
        <br />
        <br />
      </Type>
      <ItemContainer type="book" isPackSelected={isPackSelected}>
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
                <BookItem
                  img={data.sourceUrl}
                  isPackSelected={isPackSelected}
                  data={data}
                />
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
                <BookItemNotInPack img={data.sourceUrl} data={data} />
              </Item>
            )
        )}
      </ItemContainer>
      {/* <Divider /> */}
      <FormSection>
        <div
          style={{
            // marginTop: "1rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label htmlFor="additional">
            <input
              id="additional"
              style={{ minWidth: 16, marginRight: "0.5rem" }}
              type="checkbox"
              checked={additionalTick}
              onChange={e => {
                setAdditionalTick(e.target.checked);
              }}
            />
            I would like to inquire about other books too
          </label>
        </div>
        {additionalTick && (
          <div>
            <label className="additionalBooksLable">
              State the name and author of the book:
            </label>
            <textarea
              rows="5"
              cols="50"
              style={{ display: "flex" }}
              name="menu"
              placeholder="Ex: Engineering Mathematics - Rammanna"
              value={additionalBooks}
              onChange={handleAdditionalBooksChange}
            />
          </div>
        )}
      </FormSection>

      <PriceSection>
        {isPackSelected
          ? "Complete Pack is selected"
          : "Individual Books are Selected, order will be priced accordingly."}
        {isPackSelected ? (
          <>
            <Type>
              Pack Price: ₹ {booksPrice[0]}
              {booksPrice[0] !== booksPrice[1] ? ` - ₹ ${booksPrice[1]}` : null}
              <br />
              Refund: - ₹ 1000
              {booksPrice[0] !== booksPrice[1] ? ` - ₹ ${booksPrice[1]}` : null}
              <br />
              Effective Books Price: ₹ {booksPrice[0] - 1000}
              {booksPrice[0] !== booksPrice[1]
                ? ` to ₹ ${booksPrice[1] - 1000}`
                : null}
            </Type>
          </>
        ) : (
          <Type>
            Total Books Price: ₹ {booksPrice[0]}
            {booksPrice[0] !== booksPrice[1] ? ` to ₹ ${booksPrice[1]}` : null}
          </Type>
        )}
        {additionalBooks ? (
          <Type>
            *The additional books chosen will be subject to availability. The
            vendor will contact you regarding the pricing.
          </Type>
        ) : (
          ""
        )}
      </PriceSection>
    </>
  );
};

export default BooksSelector;
