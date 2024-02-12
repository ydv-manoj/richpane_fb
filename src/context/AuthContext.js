//new authcontext
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { projectAuth,firebaseT } from "../firebase/config";

export const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return projectAuth.signInWithEmailAndPassword( email, password);
  }
  function signUp(email, password) {
    return projectAuth.createUserWithEmailAndPassword( email, password);
  }
  function logOut() {
    return projectAuth.signOut(projectAuth);
  }
  function googleSignIn() {
    const googleAuthProvider = new firebaseT.GoogleAuthProvider();
    return projectAuth.signInWithPopup(googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged( (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}