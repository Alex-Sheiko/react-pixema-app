import { bgAuth } from "assets";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledAuthTemplate = styled(motion.div)`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr 24px;
  grid-row-gap: 40px;
  padding: 48px 62px 20px;
  background: url(${bgAuth}) center no-repeat;
  background-size: cover;
  ${Media.MD} {
    padding: 47px 40px 20px;
  }
  ${Media.SM} {
    padding: 32px 24px 48px;
    grid-template-rows: 40px 1fr 24px;
    grid-row-gap: 48px;
    a {
      justify-self: center;
    }
  }
  a {
    width: 150px;
  }
`;

export const Image = styled.img`
  width: 158px;
  height: 40px;
  ${Media.SM} {
    width: 147px;
    height: 38px;
  }
`;
export const Copyright = styled.p`
  ${Typography.B1};
  color: ${Color.PRIMARY_TEXT};
  justify-self: center;
  align-self: center;
`;
export const Content = styled.div`
  justify-self: center;
  min-width: 574px;
  ${Media.MD} {
    min-width: 400px;
  }
  ${Media.SM} {
    min-width: 274px;
  }
`;
