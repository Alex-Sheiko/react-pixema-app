import { Movie, MovieAPI } from "types";

export const transformMovies = (movies: MovieAPI[]): Movie[] => {
  return movies.map(({ Title, Year, Type, Poster, imdbID }) => ({
    title: Title,
    year: Year,
    type: Type,
    poster: Poster,
    imdbID,
  }));
};
