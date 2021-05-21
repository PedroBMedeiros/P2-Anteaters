import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 3rem 7rem;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Lato', sans-serif;
  }
`;
