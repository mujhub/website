import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  margin-top: 1rem;
  font-weight: 600;
  background-color: ${(props) => props.theme.PRIMARY};

  &::hover {
    /* background-color: lighten(${(props) => props.theme.PRIMARY}, 20); */
    padding: 2rem;
  }
`;

export const CallToActionButton = styled.a`
  align-items: center;
  display: flex;
  width: fit-content;
  cursor: pointer;
  background-color: ${(props) =>
    props.Primary ? `${props.theme.PRIMARY}` : `${props.theme.BG}`};
  color: ${(props) => (props.Primary ? "#ffffff" : `${props.theme.PRIMARY}`)};
  font-weight: 600;
  border: ${(props) => (props.Outline ? "2px solid" : "none")};
  border-color: ${(props) =>
    props.Outline ? `${props.theme.PRIMARY}` : "none"};
  border-radius: 4px;
  padding: 1rem 2rem;
  margin-top: 1rem;
`;
