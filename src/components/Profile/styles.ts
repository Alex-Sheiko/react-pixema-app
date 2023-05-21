import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Typography } from "ui";

export const StyledProfile = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 56px 150px;
  grid-column-gap: 30px;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: transparent;
  ${Typography.S3};
  &:hover {
    cursor: pointer;
  }
`;
export const ProfileIcon = styled.div`
  ${Typography.H3};
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${Color.PRIMARY};
`;

export const DropDown = styled(motion.div)`
  position: absolute;
  top: 110%;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 267px;
  background-color: ${Color.BLOCK_BG};
  border-radius: 10px;
`;

export const DropDownItem = styled.div`
  padding: 17px 0 15px 20px;
  transition: all 0.3s ease-in-out;

  a {
    ${Typography.S3};
    color: ${Color.PRIMARY_TEXT};
  }

  &:hover {
    cursor: pointer;
    color: ${Color.PRIMARY};
  }
`;

export const InnerSignIn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
