import styled from "styled-components";

export const H1 = styled.h1`
  color: ${props => props.theme.TEXT};
  font-size: 96px;
  font-weight: 800;
`;

export const H2 = styled.h2`
  color: ${props => props.theme.TEXT};
  font-size: 60px;
  font-weight: 800;
`;

export const H3 = styled.h3`
  color: ${props => props.theme.TEXT};
  font-size: 48px;
  font-weight: 700;
`;

export const H4 = styled.h4`
  color: ${props => props.theme.TEXT};
  font-size: 34px;
  font-weight: 700;
`;

export const H5 = styled.h5`
  color: ${props => props.theme.TEXT};
  font-size: 24px;
  font-weight: 700;
`;

export const H6 = styled.p`
  color: ${props => props.theme.TEXT};
  font-size: 20px;
  font-weight: 600;
`;

export const TypeBig = styled.p`
  color: ${props => props.theme.TEXT};
  font-size: 20px;
  font-weight: 400;
`;

export const Type = styled.p`
  color: ${props => props.theme.TEXT};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Caption = styled.p`
  font-size: 12px;
  color: ${props => props.theme.PLACEHOLDER};
  font-weight: 600;
`;
