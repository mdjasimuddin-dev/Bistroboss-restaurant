import {
  createUserWithEmailAndPassword,
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
import useAxiosPublic from "./../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

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

      const UserInfo = {
        email: currentUser?.email,
      };

      if (currentUser) {
        // token create route implement
        axiosPublic
          .post("/createToken", UserInfo)
          .then((res) => {
            console.log(res.data);
            if (res?.data?.token) {
              localStorage.setItem("BistroBoss", res.data.token);
              console.log("token saved in local storage");
              setLoading(false);
            }
          })
          .catch((err) => {
            console.log("can't create token: ", err);
          });
      } else {
        localStorage.removeItem("BistroBoss");
        setLoading(false);
      }
    });

    return () => unSubscribe();
  }, [axiosPublic]);
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
