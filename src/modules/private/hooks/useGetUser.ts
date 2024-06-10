import { useEffect, useState } from "react";
import api from "../../../util/api";
import { UserApiType } from "../../../util/types";

export const useGetUser = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserApiType>();

  const getUser = async () => {
    setLoading(true);
    try {
      const result = await api.getUser();

      setUserData(result);
    } catch (e: any) {
      console.error(e);
    }
    setLoading(false);
  };

  const refreshUserData = () => {
    getUser();
  };

  useEffect(() => {
    refreshUserData();
  }, []);

  return { userData, loading, refreshUserData };
};
