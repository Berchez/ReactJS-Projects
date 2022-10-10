import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 2,4rem;
    font-family: ${({ theme }) => theme.font.family.default}
1  }

  h1{
    font-family: ${({ theme }) => theme.font.family.secondary}
  }

`;
