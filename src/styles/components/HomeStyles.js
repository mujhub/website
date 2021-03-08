import styled from "styled-components";

export const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.DIVIDER};
`;

export const Hero = styled.div`
  width: 100%;
  align-self: flex-end;

  .desktop {
    @media (max-width: 768px) {
      margin-top: 6rem;
    }
  }

  .mobile {
    @media (max-width: 768px) {
      display: block;
    }
  }

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
  // logo in hero section
  .logo {
    @media (max-width: 768px) {
      display: block;
      height: 18%;
      width: 18%;
      margin-bottom: 1.5rem;
    }
    border-radius: 8px;
    height: 12%;
    width: 12%;
    margin-bottom: 1rem;
  }

  /* Section headings */
  .sectionHeading {
    margin: 1rem 2rem 1.5rem 0;
    @media (max-width: 768px) {
      margin: 0;
    }
  }

  /* section .description */
  .description {
    margin: 1rem 3rem 2rem 0;
  }

  /* Coming soon text */
  .comingSoon {
    margin-top: 1rem;
  }
`;

// feature Card
export const Card = styled.div`
  background-color: ${(props) => props.theme.BG2};
  border-radius: 8px;
  margin: 1.5rem;
  padding: 1rem;
  max-width: 250px;
  border-radius: 8px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-direction: column;
  transition: ease-in all;
  cursor: pointer;

  .icon {
    padding: 1rem;
    width: fit-content;
    color: white;
    background-color: ${(props) => props.color};
    box-shadow: 0px 0px 20px ${(props) => props.color}50;
    border-radius: 8px;
  }

  :hover {
    box-shadow: 0px 0px 50px ${(props) => props.color}10;
    transform: scale(1.01);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// featured card grid
export const CardStack = styled.div`
  margin-top: 1.5rem;
  display: grid;
  justify-content: center;
  align-items: flex-end;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const Subheading = styled.div`
  display: flex;
  padding: 0 20rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h4 {
    margin: 0 0 1rem 0;
  }

  p {
    color: ${(props) => props.theme.PLACEHOLDER};
  }

  .services {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

// Form
export const FormStyles = styled.section`
  margin-bottom: 3rem;
  div {
    display: flex;
    flex-direction: column;
    label {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    input,
    textarea,
    option,
    select {
      color: ${(props) => props.theme.TEXT};
      padding: 1rem;
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
    width: 100%;
    display: block;
  }

  option,
  select {
    padding: 1rem;
  }

  .checkbox {
    margin-right: 0.5rem;
  }
`;
