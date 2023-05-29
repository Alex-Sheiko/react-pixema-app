import { Button, ButtonTop, MovieList } from "components";
import { useEffect, useState } from "react";
import { fetchSearchMovies, getSearchMovies, useAppDispatch, useAppSelector } from "store";
import { useParams, useSearchParams } from "react-router-dom";
import { PageBlock } from "ui";

export const SearchPage = () => {
  const { name } = useParams();
  const [searchParams] = useSearchParams();
  const year = searchParams.get("year");
  const type = searchParams.get("type");
  const [page, setPage] = useState<number>(1);
  const handleShowMore = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    setPage((prevPage) => ++prevPage);
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    if ((year || type) && name) {
      dispatch(fetchSearchMovies({ name, year, type, page }));
    } else name && dispatch(fetchSearchMovies({ name, page }));
  }, [dispatch, name, page, year, type]);
  const { movies, isLoading, error } = useAppSelector(getSearchMovies);
  return (
    <PageBlock>
      <MovieList movies={movies} isLoading={isLoading} error={error} />
      <ButtonTop />
      {!error && !isLoading && movies.length >= 9 && (
        <Button text="Show more" type="button" option="secondary" onClick={handleShowMore} />
      )}
    </PageBlock>
  );
};
