import { useEffect, useState } from "react";
import { Button, ButtonTop, MovieList } from "components";
import { fetchHomeMovies, getMovies, useAppDispatch, useAppSelector } from "store";
import { PageBlock } from "ui";
import { RequestOption } from "types";

export const HomePage = () => {
  const { movies, isLoading, error } = useAppSelector(getMovies);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState<number>(1);
  const handleShowMore = () => setPage((prevPage) => ++prevPage);
  const words = ["spider", "star wars", "alien", "Transformers", "evil"];
  const randomSelection = words[Math.floor(Math.random() * words.length)];
  useEffect(() => {
    const requestOption: RequestOption = {
      name: randomSelection,
      page: page,
    };
    dispatch(fetchHomeMovies(requestOption));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page]);
  return (
    <PageBlock>
      <MovieList movies={movies} isLoading={isLoading} error={error} />
      <ButtonTop />
      {!isLoading && !!movies.length && (
        <Button text="Show more" type="button" option="secondary" onClick={handleShowMore} />
      )}
    </PageBlock>
  );
};
