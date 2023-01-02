import { createContext, useEffect, useState } from "react";
interface User {}

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>({});

  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};
