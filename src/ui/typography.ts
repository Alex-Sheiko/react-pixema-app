import { css } from "styled-components";
import { Media } from "ui";

const H1 = css`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;

  ${Media.MD} {
    font-size: 32px;
    line-height: 48px;
  }

  ${Media.SM} {
    font-size: 28px;
    line-height: 42px;
  }
`;

const H2 = css`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  ${Media.SM} {
    font-size: 20px;
  }
`;

const H3 = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;

  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const S1 = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;

const S2 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const S3 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const B1 = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Typography = { H1, H2, H3, S1, S2, S3, B1 };
