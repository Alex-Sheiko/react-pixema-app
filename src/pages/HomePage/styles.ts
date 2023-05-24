import styled from "styled-components";

export const BtnToTop = styled.div`
  position: relative;
`;

export const BtnIcon = styled.div`
  position: fixed;
  bottom: 40px;
  right: 15px;
  z-index: 20;
  background-color: transparent;
  height: 60px;
  width: 60px;
  cursor: pointer;
  animation: movebtn 3s ease-in-out infinite;
  transition: all 0.5s ease-in-out;
  svg {
    width: 60px;
  }
  &::hover {
    animation: none;
    background: #fff;
    color: #551b54;
    border: 2px solid #551b54;
  }

  @keyframes movebtn {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
