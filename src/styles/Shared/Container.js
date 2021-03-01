import styled from "styled-components";

export const Container = styled.div`
  padding: 0 5rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    flex-direction: column-reverse;
  }
  /* align-items: center; */
  /* height: 100vh; */
  /* padding-left: 1.5rem;
  padding-right: 1.5rem; */
`;
