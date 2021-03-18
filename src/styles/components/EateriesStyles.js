import styled from "styled-components";

export const MenuTable = styled.table`
  margin: 4rem;
`;

export const MenuRow = styled.tr`
  align-items: center;
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
  width: ${(props) => (props.description ? "30%" : "auto")};

  input,
  textarea {
    margin-top: 1rem;
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
      max-width: 25px;
      margin-right: 1rem;
      display: inline;
      /* color: green; */
    }
    &.typeField {
      max-width: 25px;
      /* margin-right: 1rem; */
      display: inline;
      /* color: green; */
    }
  }
`;

export const PriceButton = styled.button`
  margin-top: 1rem;
  margin-right: 0.5rem;
  width: 35px;
  height: 35px;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1.25rem;
  color: #ffffff;
  font-weight: 600;
  /* border: 2px solid ${(props) => props.theme.PRIMARY}; */
  /* color: ${(props) => props.theme.PRIMARY}; */
  background-color: ${(props) => props.theme.PRIMARY};
`;

export const DeleteButton = styled.button`
  margin-top: 1rem;
  margin-right: 0.5rem;
  width: 35px;
  height: 35px;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1.25rem;
  color: #ffffff;
  font-weight: 600;
  /* border: 2px solid ${(props) => props.theme.PRIMARY}; */
  /* color: ${(props) => props.theme.PRIMARY}; */
  background-color: ${(props) => props.theme.RED};
`;
export const AddButton = styled.button`
  margin-top: 1rem;
  margin-right: 0.5rem;
  width: 100%;
  height: 35px;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  /* font-size: 1rem; */
  color: #ffffff;
  font-weight: 600;
  /* border: 2px solid ${(props) => props.theme.PRIMARY}; */
  /* color: ${(props) => props.theme.PRIMARY}; */
  background-color: ${(props) => props.theme.GREEN1};
`;
