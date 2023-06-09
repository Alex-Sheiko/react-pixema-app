import { css } from "styled-components";
import { Color } from "ui";

export const themeLight = css`
  --primary-text: ${Color.DARK};
  --primary-bg: ${Color.WHITE};
  --secondary-bg: ${Color.WHITE};
  --block-bg: ${Color.WHITE};
  --select-bg: ${Color.LIGHT};
`;
export const themeDark = css`
  --primary-text: ${Color.WHITE};
  --primary-bg: ${Color.BLACK};
  --secondary-bg: ${Color.GRAPHITE};
  --block-bg: ${Color.DARK};
  --select-bg: ${Color.GRAPHITE};
`;
