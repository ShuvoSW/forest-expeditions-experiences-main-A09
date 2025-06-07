import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import { useState } from "react";

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // const emailRef = useRef()

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider();

    const createNewUser = (email,password) => {
        setLoading(true)
    
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth,email, password)
    }

    const googleLogin = () => {

        return signInWithPopup(auth, provider)

    }
    
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    //  useEffect(()=> {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         // setLoading(false);

    //     })
    //     return () => {
    //         unsubscribe();
    //     }
    //  },[])

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
        emailLogin,
        loading,
        setLoading,
        forgetPassword
   
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;