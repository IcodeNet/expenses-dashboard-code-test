import { createGlobalStyle } from "styled-components";
import { TYPOGRAPHY } from "./primitives";

export const GlobalStyles = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 2rem 0;
    margin: 0;
    background-color: #f3f3f3;
    font-family: ${TYPOGRAPHY.base};
  }

  #root {
    flex-grow: 1;
  }
`;