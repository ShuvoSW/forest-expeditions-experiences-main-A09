import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import { useState } from "react";

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    // const [emailUser, setEmailUser] = useState()

    const provider = new GoogleAuthProvider();

    const createNewUser = (email,password) => {
    
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }

    const googleLogin = () => {

        return signInWithPopup(auth, provider)

    }



    const logOut = () => {
    
        setUser(null)
        return signOut(auth);
    }


    const info = {
        googleLogin,
        user,
        setUser,
        logOut,
        createNewUser,
        emailLogin
   
    }



    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;