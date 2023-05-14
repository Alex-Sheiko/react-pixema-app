import { ROUTE } from "router";
import { generatePath } from "react-router-dom";
import { StyledMovieCard, Poster, Title, Genres, Rate, FavoriteButton } from "./styles";
import { RouterLink } from "components";
import { BookMarkIcon } from "assets";

interface MovieCardProps {
  id: string;
  title: string;
  img: string;
  genres?: string[];
  rating?: string;
  favorite?: boolean;
}
export const MovieCard = ({ id, title, img, genres, rating, favorite }: MovieCardProps) => {
  return (
    <StyledMovieCard>
      {rating && <Rate>{rating}</Rate>}
      {favorite && (
        <FavoriteButton>
          <BookMarkIcon />
        </FavoriteButton>
      )}
      <RouterLink to={generatePath(`${ROUTE.HOME + ROUTE.MOVIE}`, { id })}>
        {img === "N/A" ? (
          <Poster src={`https://via.placeholder.com/250.png?text=${title}`} alt="Not found" />
        ) : (
          <Poster src={img} alt={`poster ${title}`} />
        )}
        <Title>{title}</Title>
        {genres && (
          <Genres>
            {genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </Genres>
        )}
      </RouterLink>
    </StyledMovieCard>
  );
};
