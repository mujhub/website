import styled from "styled-components";

export const HeaderStyle = styled.div`
  h4 {
    margin: 2rem 0;
  }

  margin-bottom: 2rem;
`;

export const BookFormStyle = styled.section`
  margin-top: 1rem;
  margin-bottom: 3rem;

  input,
  textarea,
  option,
  select {
    resize: vertical;
    color: ${(props) => props.theme.TEXT};
    padding: 0.5rem;
    min-width: 200px;
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
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  margin: 1rem 0;

  @media (max-width: 1366px) {
    width: 40vw;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 3rem);
  }
`;

export const FormSection = styled.section`
  margin: 2rem 0;
  .additionalBooksLable {
    margin: 1rem 0;
    display: block;
  }

  @media (max-width: 768px) {
    textarea {
      width: calc(100vw - 4rem);
    }
  }
`;

export const ItemContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  max-width: fit-content;
  display: grid;
  padding: 1rem;
  grid-template-columns: auto auto auto;
  border-radius: 4px;
  border: 2px solid;
  border-color: ${(props) =>
    props.isPackSelected ? props.theme.GREEN1 : "#00000000"};

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
    width: calc(100vw - 4rem);
  }
`;

export const Item = styled.div`
  cursor: pointer;
  width: calc(100vw / 3 - 10rem - 1rem);
  padding: 1rem;
  border-radius: 4px;
  margin: 0.5rem;
  height: fit-content;
  background-color: ${(props) =>
    props.selected ? props.theme.SELECTED : props.theme.BG2};
  box-shadow: 0px 0px 20px
    ${(props) =>
      props.selected ? props.theme.SELECTED : "rgba(0, 0, 0, 0.1)"}50;

  p {
    margin: 0.5rem;
  }

  @media (max-width: 768px) {
    width: calc(100vw - 8rem);
    margin: 0.5rem;
  }
`;

export const PriceSection = styled.div`
  text-align: center;
  /* background-color: ${(props) =>
    props.final ? props.theme.BG2 : props.theme.BG}; */
  padding: ${(props) => (props.final ? "1rem" : "0.5rem")};
  border-radius: 4px;
  p {
    font-weight: 500;
  }
`;

export const ModalContainer = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: ${(props) => props.theme.BG};
  margin: 0;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  /* transform: translate(-50%, -50%); */
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  /* pointer-events: none; */

  .content {
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1rem;
    position: fixed;
    width: 30%;
    /* max-height: calc(100vh - 2rem); */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.BG2};
    @media (max-width: 768px) {
      width: calc(100vw - 4rem);
      max-height: calc(100vh - 4rem);
    }

    h6 {
      margin-bottom: 1rem;
    }
    .logo {
      & > div {
        flex-grow: 1;
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 4px;
        margin-right: 1rem;
      }
      button {
        color: white;
        /* font-size: 1rem; */
        padding: 0.5rem;
        margin-left: 1rem;
        display: flex;
        align-items: center;
        border-radius: 4px;
        border: 0;
        font-weight: 600;
        background-color: ${(props) => props.theme.BG2};
        color: ${(props) => props.theme.PRIMARY};
      }

      display: flex;
      /* flex-wra?p: wrap; */
      align-items: center;
      margin-bottom: 1.5rem;
    }
    .details {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
      /* margin-top: 0.5rem; */
      /* p {
        font-weight: 600;
        margin: 0.5rem 0;
      } */
    }
    .products {
      margin: 0.5rem 0;
      line-height: 1.5;
      div {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
      }
      td {
        padding: 0;
      }
    }
  }
`;
