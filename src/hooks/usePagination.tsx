import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(25);

  const onPaginationChange = (pageValue: number, limitValue: number) => {
    setPage(pageValue);
    setLimit(limitValue);
  };

  const resetPageNum = () => {
    setPage(1);
  };

  return { page, limit, onPaginationChange, resetPageNum };
};
