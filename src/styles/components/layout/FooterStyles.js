import styled from "styled-components";

export const FooterStyles = styled.footer`
  background-color: ${(props) => props.theme.BG2};
  padding: 0rem 6rem;
  .FooterColumn {
    display: flex;
    flex-direction: column;
  }

  p {
    padding: 1rem 0;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .FooterLinks {
    display: flex;
    a {
      padding-left: 0.5rem;
    }
  }
`;
