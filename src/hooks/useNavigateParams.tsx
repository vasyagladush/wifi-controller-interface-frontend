import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

export const useNavigateParams = () => {
  const navigate = useNavigate();
  return (
    pathname: string,
    params?: Record<string, string> | URLSearchParams
  ) => {
    const path = {
      pathname,
      search: createSearchParams(params).toString(),
    };
    navigate(path);
  };
};
