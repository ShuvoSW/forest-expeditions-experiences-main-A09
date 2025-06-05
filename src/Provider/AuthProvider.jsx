import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

// const provider = new GoogleAuthProvider();
const provider = new GoogleAuthProvider();

    const googleLogin = () => {

        return signInWithPopup(auth, provider)

    }

     const info = {
         googleLogin
     }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;