import styled from "styled-components";

export const MessMenu = styled.div`
  line-height: 1.2;
  background-color: ${props => props.theme.BG2};
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

export const SpecialPill = styled.div`
  border-radius: 16px;
  padding: 0.3rem 0.5rem;
  border: 2px solid ${props => props.theme.ACCENT};
  p {
    color: ${props => props.theme.ACCENT};
    font-weight: 700;
    margin: 0;
  }
`;

export const Meal = styled.div`
  display: flex;
  align-items: baseline;
  p {
    margin-right: 0.5rem;
  }
`;

export const MealContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
`;

export const MenuItem = styled.p`
  margin: 1rem 0;
  font-size: 14px;
  color: ${props => props.theme.PLACEHOLDER};
  line-height: 1.8;
`;

export const RibbonStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 80vw; */
  margin: 0 5rem;

  p {
    color: ${props => props.theme.RED};
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const LoginStyles = styled.div`
  /* min-height: calc(100vh -6px -83.2); */
  height: calc(100vh - 96px - 177px);
`;
