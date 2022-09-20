import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors["base-bg"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    font-family: ${({ theme }) => theme.fonts["regular"]};
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  input {
    outline: none;
    border: none;  
  }
`;
