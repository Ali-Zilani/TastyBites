import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile,signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function AuthProvider({children}) {
    const [user,setUser] = useState("test");
    const [loading,setLoading] = useState(true);

    // create an account
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // signup with gmail account
    const signUpWithGmail = () => {
      return signInWithPopup(auth,googleProvider);
    }
    // login using email & password
    const login = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password);
    }
    // logout function
    const logout = () => {
      return signOut(auth)
    }
    //update profile
    const updateUserProfile = ({name,photoURL}) => {
      return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photoURL
      })
    }
    // check sign-in user
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
          setUser(currentUser)
          setLoading(false)
        }
        else{

        }
      });
      return ()=>{
        return unsubscribe();
      }
    },[])

    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logout,
        updateUserProfile,
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;