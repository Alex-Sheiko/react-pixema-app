import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
${Reset};

html {
  font-family: 'Exo 2', sans-serif;
  font-style: normal;
  height:100%;
}
`;
