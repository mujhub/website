import styled from "styled-components";

export const Card = styled.div`
  margin: 2rem;
  border-radius: 8px;
  padding-bottom: 1rem;
  background-color: ${props => props.theme.BG2};
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */

  .memberName {
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .memberPost {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }

  .memberLinks {
    /* margin-top: 0.5rem; */
    margin-left: 1rem;
    a {
      color: ${props => props.theme.PRIMARY};
      margin-right: 1rem;
    }
  }
  img {
    border-radius: 8px 8px 0 0;
  }
`;

export const TeamHeaderContainer = styled.section`
  padding: 0 20rem;
  margin-top: 2rem;
  text-align: center;

  h4 {
    margin: 0 0 1rem 0;
  }

  .TeamHeaderDesc {
    padding: 0 1.5rem;
    color: ${props => props.theme.PLACEHOLDER};
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const TeamContainer = styled.section`
  min-height: calc(100vh - 96px - 180px);
`;
