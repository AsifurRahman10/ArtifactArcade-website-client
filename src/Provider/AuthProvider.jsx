import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import axios from "axios";

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // google login
  const handleGoogleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider).then((res) => {
      console.log(res);
      const name = res.user.displayName;
      const email = res.user.email;
      const userData = { name, email };
      axios.post("http://localhost:4000/user", userData).then((res) => {});
    });
  };

  // register with email
  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const addProfile = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // signout
  const handleSignOut = () => {
    return signOut(auth);
  };

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    handleGoogleLogin,
    registerWithEmail,
    loginWithEmail,
    addProfile,
    user,
    handleSignOut,
    setUser,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
