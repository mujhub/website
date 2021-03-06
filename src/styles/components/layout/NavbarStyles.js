import styled from "styled-components";

export const Nav = styled.div`
  padding: 1rem 5rem;
  /* padding-left: 5rem;
  padding-right: 5rem; */
  height: 4rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.BG};
  color: ${(props) => props.theme.TEXT};
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;

    margin-bottom: 0rem;
    H2 {
      font-size: 20px;
    }
  }
`;

export const NavLinks = styled.li`
  a {
    text-decoration: none;
  }
  margin-right: 1rem;
  list-style: none;
  flex-grow: ${(props) => (props.logo ? "1" : "0")};
`;

export const Button = styled.button`
  padding: 0.75rem;
  width: 45px;
  height: 45px;
  background-color: ${(props) => props.theme.BG};
  color: ${(props) => props.theme.TEXT};
  border: none;
  border-radius: 8px;
`;
