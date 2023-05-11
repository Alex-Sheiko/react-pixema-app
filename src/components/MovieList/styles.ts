import { Media } from "ui";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMovieList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  ${Media.Lg} {
    gap: 32px;
  }
  ${Media.Sm} {
    gap: 32px 0;
    justify-content: center;
  }
`;
