import styled from "styled-components";
import { Media } from "ui";
import { motion } from "framer-motion";

export const FavoriteList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  ${Media.MD} {
    gap: 32px;
  }
`;
