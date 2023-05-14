import axios from "axios";
import { MovieSearchAPI, MovieInfoAPI, RequestOption } from "types";

class restMoviesAPI {
  getPopularMovies(page: number) {
    throw new Error("Method not implemented.");
  }
  private readonly urlAPI = process.env.REACT_APP_API_URL;
  private readonly keyAPI = process.env.REACT_APP_API_KEY;
  private readonly API = axios.create({
    baseURL: this.urlAPI,
    params: {
      apikey: this.keyAPI,
    },
  });

  public async getMovie(id: string) {
    const params = {
      i: id,
      plot: "full",
    };
    const { data } = await this.API.get<MovieInfoAPI>("", { params });
    if (data.Error) throw new Error(data.Error);
    return data;
  }
  public async getSearchMovies({ name, type = null, year = null, page }: RequestOption) {
    const params = {
      s: name,
      type,
      y: year,
      page,
    };
    const { data } = await this.API.get<MovieSearchAPI>("", { params });
    if (data.Error) throw new Error(data.Error);
    return data;
  }
}

export const moviesApi = new restMoviesAPI();
