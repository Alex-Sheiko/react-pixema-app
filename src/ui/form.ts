import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media } from "ui";

export const Form = styled(motion.form)`
  background-color: ${Color.BLOCK_BG};
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  border-radius: 10px;
  ${Media.SM} {
    padding: 24px;
    gap: 32px;
  }
`;
