import { Media } from "ui";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMainTemplate = styled(motion.div)`
  min-height: 100vh;
  padding: 40px;
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 146px;

  ${Media.LG} {
    height: 100%;
    padding: 40px 60px;
    grid-template-columns: 1fr;
  }

  ${Media.SM} {
    padding: 15px;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;
