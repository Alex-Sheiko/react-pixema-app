export interface Rating {
  source: string;
  value: string;
}
export interface RatingAPI {
  Source: string;
  Value: string;
}

export interface MovieInfo {
  imdbID: string;
  title: string;
  year: string;
  released: string;
  genres: string[];
  director: string;
  writer: string;
  actors: string;
  plot: string;
  country: string;
  poster: string;
  ratings: Rating[];
  metascore: string;
  imdbRating: string;
  totalSeasons?: string;
  boxOffice?: string;
  production?: string;
  runTime?: string;
}

export interface MovieInfoAPI {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: RatingAPI[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD?: string;
  totalSeasons?: string;
  BoxOffice?: string;
  Response: string;
  Production?: string;
  Website?: string;
  Error?: string;
}

export interface Movie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export interface MovieAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieSearchAPI {
  Search: MovieAPI[];
  totalResult: string;
  Response: string;
  Error?: string;
}

export interface RequestOption {
  name: string;
  type?: string | null;
  year?: string | null;
  page?: number;
}

export interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface SettingsData {
  email: string;
  password: string;
  name: string;
  theme: Theme;
}

export type Theme = "dark" | "light";
