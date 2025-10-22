import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(true);

  const createUserWithEmailAndPasswordFunc = (email, password) => {
    setSpinner(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailAndPasswordFunc = (email, password) => {
    setSpinner(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithPopupFunc = () => {
    setSpinner(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateProfileFunc = (displayName, photoURL) => {
    setSpinner(true);
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  const signOutFunc = () => {
    setSpinner(true);
    return signOut(auth);
  };

  const authInfo = {
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    updateProfileFunc,
    signOutFunc,
    signInWithPopupFunc,
    user,
    setUser,
    error,
    setError,
    spinner,
    setSpinner,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setSpinner(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
