import { css } from "styled-components";
import { Color } from "ui";

export const lightTheme = css`
  --primary-text: ${Color.Dark};
  --primary-bg: ${Color.White};
  --secondary-bg: ${Color.White};
  --select-bg: ${Color.Light};
`;
export const darkTheme = css`
  --primary-text: ${Color.White};
  --primary-bg: ${Color.Black};
  --secondary-bg: ${Color.Graphite};
  --select-bg: ${Color.Graphite};
`;
