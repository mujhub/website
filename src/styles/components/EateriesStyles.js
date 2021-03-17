import styled from "styled-components";

export const MenuTable = styled.table`
  margin: 4rem;
`;

export const MenuRow = styled.tr`
  &.tableHeader {
    td {
      text-align: left;
      /* padding: 1rem; */
      padding-bottom: 1rem;
      border-bottom: 2px solid;
    }
  }
`;

export const MenuData = styled.td`
  vertical-align: top;
  padding-right: 1rem;
  padding-top: 1rem;
  width: ${(props) => (props.description ? "40%" : "auto")};

  input,
  textarea {
    display: inline;
    line-height: 2;
    max-height: 8rem;
    resize: vertical;
    color: ${(props) => props.theme.TEXT};
    padding: 0.5rem;
    background-color: ${(props) => props.theme.FIELD};
    border: none;
    border-radius: 4px;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    ::placeholder {
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    }
  }

  input {
    &.priceField {
      max-width: 40px;
      margin-right: 1rem;
      display: inline;
      /* color: green; */
    }
  }
`;

export const PriceButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  margin-top: 0;
  font-weight: 600;
  background-color: ${(props) => props.theme.PRIMARY};
`;
