import styled from "styled-components";

export const FooterStyles = styled.footer`
  background-color: ${(props) => props.theme.BG2};
  padding: 0rem 4rem;
  margin-top: 1rem;

  a {
    color: ${(props) => props.theme.PLACEHOLDER};
  }

  p {
    padding: 1rem 0;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      padding-bottom: 2rem;
    }
  }

  .FooterColumn {
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .FooterLinks {
    display: flex;
    a {
      padding-left: 0.5rem;
    }
  }
`;
