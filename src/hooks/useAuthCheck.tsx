import Api from "../util/api";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContextProvider";
import { useSearchParams } from "react-router-dom";
import { AppRoutes } from "../constants/routes";
import { useNavigateParams } from "./useNavigateParams";

export const useAuthCheck = () => {
  const navigate = useNavigateParams();
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(true);
  const { setUser } = useUserContext();

  const checkSignInStatus = async () => {
    try {
      // TODO: update access token if we introduce refresh token
      // Api.updateHeadersWithToken(jwt);
      const user = await Api.getUser();

      setUser(user);

      setLoading(false);

      return { user };
    } catch (e: any) {
      setLoading(false);
      console.error(e);
      navigate(AppRoutes.Open.Auth.SIGN_IN_START, searchParams);
      return { user: null };
    }
  };

  useEffect(() => {
    checkSignInStatus();
  }, []);

  return { loading, checkSignInStatus };
};
