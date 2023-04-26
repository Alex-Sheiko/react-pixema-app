import { css } from "styled-components";
import { Media } from "ui";

const SP1 = css`
  margin: 0 0 64px 0;

  ${Media.Md} {
    margin: 0 0 56px 0;
  }

  ${Media.Sm} {
    margin: 0 0 48px 0;
  }
`;

const SP2 = css`
  margin: 0 0 56px 0;

  ${Media.Md} {
    margin: 0 0 48px 0;
  }

  ${Media.Sm} {
    margin: 0 0 40px 0;
  }
`;

const SP3 = css`
  margin: 0 0 48px 0;

  ${Media.Sm} {
    margin: 0 0 40px 0;
  }
`;

const SP4 = css`
  margin: 0 0 40px 0;

  ${Media.Sm} {
    margin: 0 0 32px 0;
  }
`;

const SP5 = css`
  margin: 0 0 32px 0;

  ${Media.Sm} {
    margin: 0 0 24px 0;
  }
`;

const SP6 = css`
  margin: 0 0 24px 0;

  ${Media.Sm} {
    margin: 0 0 20px 0;
  }
`;

const SP7 = css`
  margin: 0 0 24px 0;

  ${Media.Sm} {
    margin: 0 0 20px 0;
  }
`;

const SP8 = css`
  margin: 0 0 16px 0;
`;

const SP9 = css`
  margin: 0 0 8px 0;
`;

export const Spaces = { SP1, SP2, SP3, SP4, SP5, SP6, SP7, SP8, SP9 };
