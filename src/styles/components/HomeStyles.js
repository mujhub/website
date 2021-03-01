import styled from "styled-components";

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
  width: 100%;
  .desktop {
    @media (max-width: 768px) {
      display: none;
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
