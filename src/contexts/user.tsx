import { createContext, useEffect, useState } from "react";
interface User {}

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>({});
  const [userProfileView, setUserProfileView] = useState<User>({});
  const [userProfileViewId, setUserProfileViewId] = useState<User>(localStorage.getItem("USER_CONTEXT_PROFILE") || "");
  const [token, setToken] = useState<string>((localStorage.getItem("TOKEN_MOTORS_SHOP")) || "");
  const [stateEdit, setEdit]= useState<boolean>(false)


  return (
    <UserContext.Provider
      value={{
        setUser,
        user,
        setToken,
        token,
        userProfileView,
        setUserProfileView,stateEdit,
        setEdit,
        userProfileViewId,
        setUserProfileViewId
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
