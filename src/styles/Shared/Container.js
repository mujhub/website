import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) =>
    props.background ? props.theme.BG2 : props.theme.BG};

  padding: ${(props) => (props.p ? props.p : "0 0")};

  margin: ${(props) => (props.m ? props.m : "0rem 0rem")};

  display: flex;

  width: ${(props) => (props.width ? props.width : "auto")};

  flex-direction: ${(props) => (props.column ? "column" : "row")};

  align-items: ${(props) => (props.center ? "center" : "flex-start")};

  justify-content: ${(props) => (props.center ? "center" : "flex-start")};

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    flex-direction: ${(props) =>
      props.reverseOnMobile ? "column-reverse" : "column"};
  }

  &.desktop {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
