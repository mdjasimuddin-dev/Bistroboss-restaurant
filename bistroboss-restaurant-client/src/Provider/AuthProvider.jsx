import {
  createUserWithEmailAndPassword,
  deleteUser,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ============== User create email/password ===============
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ============== User signIn email/password ===============
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ============== User handle logout function ===============
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // =============== Facebook login function ===============
  const facebookProvider = new FacebookAuthProvider();
  const handleFacebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // =============== google login function ===============
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // =============== Github login function ===============
  const githubProvider = new GithubAuthProvider();
  const handleGithubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };


  // ============== monitoring current user ==============
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User : ", currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);
  // =============== monitoring current user ==============

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    handleFacebookLogin,
    handleGoogleLogin,
    handleGithubLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
