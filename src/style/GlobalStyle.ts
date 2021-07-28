import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    font-family: AppleSDGothicNeo-Medium;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: nomal;
    font-weight: 400;
  }
  body {
    height: 100%;
  }
  button {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
  a, a:hover, a:focus, a:active {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    display: block;
  }
  input:focus {
    outline: none;
  }
  input {
    border:none;
    outline:none;
  }
  hr {
    border: 0px;
  }
`;

export default GlobalStyles;
