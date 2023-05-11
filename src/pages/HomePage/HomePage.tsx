import { useEffect, useState } from "react";
import { Button, MovieList } from "components";
import { fetchHomeMovies, getMovies, useAppDispatch, useAppSelector } from "store";

export const HomePage = () => {
  const { movies, isLoading, error } = useAppSelector(getMovies);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const handleShowMore = () => setPage((prevPage) => ++prevPage);
  useEffect(() => {
    dispatch(fetchHomeMovies({ name: "Star Wars", type: "movie", page }));
  }, [dispatch, page]);
  return (
    <>
      <MovieList movies={movies} isLoading={isLoading} error={error} />
      {!isLoading && !!movies.length && (
        <Button text="Show more" type="button" option="secondary" onClick={handleShowMore} />
      )}
    </>
  );
};
