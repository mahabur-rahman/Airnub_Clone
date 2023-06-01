import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  //   user profile info get after login
  useEffect(() => {
    if (!user) {
      axios
        .get(`/profile`)
        .then((res) => {
          //  console.log(res);
          setUser(res.data);
          setReady(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        ready,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
