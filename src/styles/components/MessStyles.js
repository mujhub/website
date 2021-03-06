import styled from "styled-components";
import theme from "../../theme";

export const MessMenu = styled.div`
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
  margin-top: 0.5rem;
`;
