import { Spinner, MovieCard } from "components";
import { Movie } from "types";
import { StyledMovieList } from "./styles";

interface MovieListProps {
  movies: Movie[];
  isLoading: boolean;
  error?: string | null;
}
export const MovieList = ({ movies, isLoading, error }: MovieListProps) => {
  if (isLoading) return <Spinner />;
  if (movies.length === 0 || error) {
    return <div>Not found</div>;
  }
  return (
    <StyledMovieList
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      {movies &&
        movies.map(({ imdbID, title, poster }) => (
          <MovieCard key={imdbID} title={title} img={poster} id={imdbID} />
        ))}
    </StyledMovieList>
  );
};
