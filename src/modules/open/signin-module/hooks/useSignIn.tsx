import { useState } from "react";
import { useUserContext } from "../../../../context/UserContextProvider";
import Api from "../../../../util/api";
import api from "../../../../util/api";

export const useSignIn = () => {
  const { setUser } = useUserContext();
  const [loading, setLoading] = useState(false);
  const signIn = async (username: string, password: string) => {
    setLoading(true);
    const accessToken = (await api.login({ username, password })).accessToken;
    const user = await Api.getUser();
    console.log('USER GOT: ', user)
    setUser(user);
    setLoading(false);
    return { user, accessToken };
  };

  const updateLoading = (val: boolean) => {
    setLoading(val);
  };
  return { signIn, loading, updateLoading };
};
