import styled from "styled-components";
import { Color, Media, Typography } from "ui";

export const StyledMovieCard = styled.li`
  position: relative;
  max-width: 266px;
  max-height: 433px;
  ${Media.Lg} {
    max-width: 200px;
    max-height: 379px;
  }
  ${Media.Md} {
    max-width: 180px;
  }
  ${Media.Sm} {
    max-width: 272px;
    max-height: 437px;
  }
`;

export const Poster = styled.img`
  width: 266px;
  height: 357px;
  border-radius: 20px;
  margin-bottom: 8px;
  ${Media.Lg} {
    width: 200px;
    height: 279px;
  }
  ${Media.Md} {
    width: 180px;
  }
  ${Media.Sm} {
    margin-bottom: 20px;
    width: 272px;
    height: 365px;
  }
`;
export const Title = styled.h6`
  ${Typography.S2};
`;

export const Genres = styled.p`
  color: ${Color.LIGHT};
  display: flex;
  flex-wrap: wrap;
  gap: 2px 13px;
  ${Typography.S3}
  font-weight: 500;

  span {
    position: relative;
    &:after {
      content: "\u2022";
      display: block;
      position: absolute;
      right: -10px;
      top: 0;
    }
    &:last-child:after {
      display: none;
    }
  }
`;

export const Rate = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: ${Color.GREEN};
  color: ${Color.WHITE};
  border-radius: 6px;
  padding: 2px 8px;
  ${Typography.S3};
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${Color.GRAPHITE};
  border: none;
  border-radius: 6px;
  padding: 2px 8px;

  path {
    fill: ${Color.PRIMARY};
    transition: 0.3s fill ease-in-out;
  }
  &:hover {
    cursor: pointer;
    path {
      fill: ${Color.PRIMARY_LIGHT};
    }
  }
`;
