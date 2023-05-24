import { useEffect, useState } from "react";
import { Button, ButtonTop, MovieList } from "components";
import { useAppSelector, useAppDispatch, getTrends, fetchTrends } from "store";
import { PageBlock } from "ui";

export const TrendsPage = () => {
  const { trends, isLoading, error } = useAppSelector(getTrends);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const handleShowMore = () => setPage((prevPage) => ++prevPage);

  useEffect(() => {
    dispatch(fetchTrends(page));
  }, [dispatch, page]);
  return (
    <PageBlock>
      <MovieList movies={trends} isLoading={isLoading} error={error} />
      <ButtonTop />
      {!isLoading && !!trends.length && (
        <Button text="Show more" type="button" option="secondary" onClick={handleShowMore} />
      )}
    </PageBlock>
  );
};
