import { Media } from "ui";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMainTemplate = styled(motion.div)`
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 146px;
  max-width: 1920px;
  min-height: 100vh;
  padding: 40px;
  margin: 0 auto;

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
