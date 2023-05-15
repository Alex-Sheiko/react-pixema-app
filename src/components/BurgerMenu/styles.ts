import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media } from "ui";

export const Burger = styled.div`
  padding: 13px 16px;
  border-radius: 10px;
  background-color: ${Color.PRIMARY};
  grid-area: burger;
  cursor: pointer;
`;

export const Background = styled(motion.div)`
  background-color: ${Color.DARK};
  opacity: 0.5;
`;

export const StyledBurgerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  ${Media.MD} {
    grid-template-columns: 2fr 1.5fr;
    width: 100%;
    height: 100%;
  }
  ${Media.SM} {
    grid-template-columns: 0 1fr;
  }
`;

export const Menu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${Color.BLOCK_BG};
  padding: 48px 40px;
`;

export const MenuHeader = styled.div`
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
