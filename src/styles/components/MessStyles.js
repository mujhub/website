import styled from "styled-components";

export const MessMenu = styled.div`
  line-height: 1.2;
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

export const SpecialPill = styled.div`
  p {
    color: ${(props) => props.theme.YELLOW};
    margin-top: 0;
  }
`;

export const Meal = styled.div`
  display: flex;
  align-items: baseline;
  p {
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export const MealContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
`;

export const MenuItem = styled.p`
  margin-top: 0rem;
  color: ${(props) => props.theme.PLACEHOLDER};
  line-height: 1.8;
`;

export const RibbonStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 80vw; */
  margin: 0 5rem;

  p {
    color: ${(props) => props.theme.RED};
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
`;
