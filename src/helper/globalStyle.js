import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    body{
      background: ${(props) => props.theme.BG};
      color: ${(props) => props.theme.TEXT};
    }
  `;

export default GlobalStyle;
