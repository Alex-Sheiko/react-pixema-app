import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";
import { themeDark, themeLight } from "./theme";
import { Color } from "ui";

export const GlobalStyles = createGlobalStyle`
${Reset};

body {
  color: ${Color.PRIMARY_TEXT};
  background-color: ${Color.PRIMARY_BG};
}

html {
  font-family: 'Exo 2', sans-serif;
  font-style: normal;
  height:100%;
}

html[theme=dark] {
  ${themeDark}
}

html[theme=light] {
   ${themeLight}
}
`;
