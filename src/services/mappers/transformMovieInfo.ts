import { MovieInfo, MovieInfoAPI } from "types";

export const transformMovieInfo = (movie: MovieInfoAPI): MovieInfo => ({
  imdbID: movie.imdbID,
  title: movie.Title,
  actors: movie.Actors,
  released: movie.Released,
  year: movie.Year,
  genres: movie.Genre.split(","),
  director: movie.Director,
  writer: movie.Writer,
  plot: movie.Plot,
  country: movie.Country,
  poster: movie.Poster,
  ratings: movie.Ratings.map((rating) => ({ value: rating.Value, source: rating.Source })),
  metascore: movie.Metascore,
  imdbRating: movie.imdbRating,
  totalSeasons: `${movie.totalSeasons || ""}`,
  boxOffice: movie.BoxOffice,
  production: movie.Production,
  runTime: movie.Runtime,
});
