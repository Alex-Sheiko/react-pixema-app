import { useEffect, useState } from "react";
import { Button, ButtonTop, MovieList } from "components";
import { useAppSelector, useAppDispatch, getTrends, fetchTrends } from "store";
import { PageBlock } from "ui";
import { RequestOption } from "types";

export const TrendsPage = () => {
  const { trends, isLoading, error } = useAppSelector(getTrends);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const handleShowMore = () => setPage((prevPage) => ++prevPage);
  const words = ["bullet", "horror", "avengers", "hero", "predator"];
  const randomSelection = words[Math.floor(Math.random() * words.length)];

  useEffect(() => {
    const requestOption: RequestOption = {
      name: randomSelection,
      page: page,
    };
    dispatch(fetchTrends(requestOption));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
