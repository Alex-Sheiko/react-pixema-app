export interface RatingAPI {
  Source: string;
  Value: string;
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
