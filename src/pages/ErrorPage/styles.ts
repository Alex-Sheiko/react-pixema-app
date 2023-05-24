import { error_404 } from "assets";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  padding-top: 40px;
  height: 100vh;
  ${Media.MD} {
    padding: 40px;
    height: 100%;
    align-items: center;
  }
  ${Media.SM} {
    padding: 32px 24px 48px;
  }
`;

export const Body = styled.div`
  margin: 150px auto 0;
  text-align: center;

  ${Media.MD} {
    text-align: center;
    margin-top: 100px;
  }
  ${Media.SM} {
    margin-top: 50px;
  }
`;
export const Text = styled.p`
  ${Typography.H2};
  color: ${Color.LIGHT};
  margin: 20px 0;
`;

export const ImageError = styled.div`
  max-width: 600px;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  background: url(${error_404}) center no-repeat;
  background-size: cover;
  ${Media.MD} {
    width: 336px;
    height: 298px;
  }
  ${Media.SM} {
    width: 202px;
    height: 180px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  max-width: 180px;
  margin: 0 auto;
  padding: 10px;
  background-color: ${Color.PRIMARY};
  color: ${Color.DARK};
  border-radius: 10px;
  ${Typography.S3};
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: scale(0.9);
    transition: 0.9s all ease-in-out;
  }
`;
