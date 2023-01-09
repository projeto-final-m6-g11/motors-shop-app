import { createContext, useEffect, useState } from "react";
interface User {}

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>({});
  const [userProfileView, setUserProfileView] = useState<User>({});
  const [token, setToken] = useState<string>("");

  return (
    <UserContext.Provider
      value={{
        setUser,
        user,
        setToken,
        token,
        userProfileView,
        setUserProfileView,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
