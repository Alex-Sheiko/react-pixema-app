import { Media } from "ui";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMovieList = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 266px);
  gap: 40px;
  ${Media.LG} {
    gap: 32px;
    grid-template-columns: repeat(auto-fill, 200px);
    justify-content: center;
  }
  ${Media.SM} {
    gap: 32px;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 266px);
  }
`;
