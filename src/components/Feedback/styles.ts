import { feedback } from "assets";
import styled from "styled-components";
import { Color, Media } from "ui";

export const StyledFeedback = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: ${Color.SECONDARY};
`;

export const Image = styled.div`
  width: 400px;
  height: 400px;
  background: url(${feedback}) center no-repeat;
  background-size: contain;
  ${Media.MD} {
    width: 336px;
    height: 298px;
  }
  ${Media.SM} {
    width: 202px;
    height: 180px;
  }
`;
