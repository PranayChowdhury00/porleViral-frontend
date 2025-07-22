import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  sendPasswordResetEmail  // Add this import
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "./authContext"; 

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    
    const GoogleProvider = new GoogleAuthProvider();

    const createNewUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, GoogleProvider);
    }

    const signOutUser = () => {
        setLoader(true);
        return signOut(auth);
    }

    // Add this new function for password reset
    const resetPassword = (email) => {
        setLoader(true);
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        }, (error) => {
            console.error("Auth state error:", error);
            setLoader(false);
        });
        
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loader,
        createNewUser,
        signInUser,
        googleSignIn,
        signOutUser,
        resetPassword,  // Add this to the context
        setLoader
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;