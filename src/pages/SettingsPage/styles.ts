import styled from "styled-components";
import { Color, Media, Typography } from "ui";
import { motion } from "framer-motion";

export const FormSettings = styled(motion.form)`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1186px;
  ${Media.MD} {
    height: 100%;
  }
`;

export const FormCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 40px;
  background-color: ${Color.BLOCK_BG};
  ${Media.SM} {
    gap: 20px;
    padding: 24px;
    margin-bottom: 32px;
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  ${Typography.H2};
  margin-bottom: 16px;
`;
export const DescSpan = styled.span`
  color: ${Color.LIGHT};
  ${Typography.B1}
`;
export const GroupButton = styled.div`
  display: grid;
  justify-self: end;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  ${Media.SM} {
    display: flex;
    flex-direction: column-reverse;
    justify-self: center;
  }
`;
