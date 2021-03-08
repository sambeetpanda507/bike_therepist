import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
    });
  }, []);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};
