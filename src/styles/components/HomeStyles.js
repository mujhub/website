import styled from "styled-components";
import theme from "../../theme";

export const MessMenu = styled.div`
  background-color: ${(props) => props.theme.BG2};
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem;

  @media (max-width: 768px) {
    margin: 0;
    width: auto;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.DIVIDER};
`;

export const Hero = styled.div`
  padding-right: 1.5rem;
  width: 100%;
  .desktop {
    @media (max-width: 768px) {
      margin-top: 6rem;
    }
  }
  .mobile {
    .buttons {
      display: flex;
      a {
        margin-right: 1rem;
      }
      @media (max-width: 768px) {
        flex-direction: column;
        a {
          margin-right: 0;
          width: auto;
          justify-content: center;
        }
      }
    }
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const Card = styled.div`
  padding: 1.5rem;
  max-width: 200px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-right: 2rem; */

  .icon {
    padding: 1rem;
    width: fit-content;
    color: white;
    background-color: ${(props) => props.color};
    box-shadow: 0px 0px 20px ${(props) => props.color}50;
    border-radius: 8px;
  }
  .text {
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CardStack = styled.div`
  margin-top: 1.5rem;
  display: grid;
  align-items: baseline;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
`;

export const Subheading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FormStyles = styled.section`
  div {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 1rem;
      margin-right: 2rem;
    }
    input,
    textarea {
      padding: 1rem;
      border: none;
      border-radius: 4px;
      -moz-placeholder {
        font-family: "Inter", Arial, Helvetica, sans-serif;
      }
    }

    textarea {
      resize: vertical;
      height: 20vh;
      width: 40vw;
      @media (max-width: 768px) {
        width: 80vw;
      }
    }
  }
  .submitBtn {
    padding: 1rem;
    margin: 2rem 0;
    width: 50%;
    display: block;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
