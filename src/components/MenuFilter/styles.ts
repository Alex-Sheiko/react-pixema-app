import { Color, Media } from "ui";
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFilterMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 6fr 3fr;
  ${Media.MD} {
    grid-template-columns: 1fr 4fr;
    width: 100%;
    height: 100%;
  }
  ${Media.SM} {
    grid-template-columns: 0 1fr;
  }
`;

export const Background = styled(motion.div)`
  background-color: ${Color.DARK};
  opacity: 0.5;
`;

export const Filters = styled(motion.form)`
  display: grid;
  grid-template-rows: 50px 1fr 60px;
  grid-gap: 40px;
  background-color: ${Color.BLOCK_BG};
  border-radius: 10px 0 0 10px;
  padding: 48px 40px;
  ${Media.SM} {
    grid-template-rows: 50px 1fr 120px;
    border-radius: 0px;
  }
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
    &:hover {
      path {
        fill: ${Color.PRIMARY};
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  ${Media.SM} {
    flex-direction: column-reverse;
    align-items: stretch;
    gap: 16px;
  }
`;
