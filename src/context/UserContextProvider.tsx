import {
  createContext,
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { useGetUser } from "../modules/private/hooks/useGetUser";
import { UserApiType } from "../util/types";

interface IUserContext {
  user: UserApiType;
  setUser: (data: Partial<UserApiType>) => void;
  clearUser: () => void;
  refreshUserData: () => void;
}

export const defaultValues: UserApiType = {
  id: "",
  username: "",
  firstname: "",
  lastname: "",
};

const UserContext = createContext<IUserContext>({
  user: defaultValues,
  setUser: () => null,
  clearUser: () => null,
  refreshUserData: () => null,
});

export const UserContextProvider: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const { userData: user, refreshUserData } = useGetUser();
  const [userData, setUserData] = useState(defaultValues);

  const handleUserUpdate = (data: Partial<UserApiType>) => {
    setUserData({ ...userData, ...data });
  };

  const handleUserClear = () => {
    setUserData(defaultValues);
  };

  useEffect(() => {
    user &&
      setTimeout(() => {
        handleUserUpdate(user);
      }, 1500);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user: userData,
        setUser: handleUserUpdate,
        clearUser: handleUserClear,
        refreshUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
