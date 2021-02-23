import styled from "styled-components";

export const Nav = styled.div`
  padding: 2rem;
  /* padding-left: 5rem;
  padding-right: 5rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  background: ${(props) => props.theme.BG};
  color: ${(props) => props.theme.TEXT};
`;

export const NavLinks = styled.li`
  list-style: none;
  flex-grow: ${(props) => (props.logo ? "1" : "0")};
  padding: 0 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem;
  width: 45px;
  height: 45px;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.BG};
  color: ${(props) => props.theme.TEXT};
  /* border: 2px solid ${(props) => props.theme.PLACEHOLDER}; */
  border: none;
  border-radius: 8px;
`;
