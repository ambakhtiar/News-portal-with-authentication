import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user);
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userVerifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const userLogInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const userLogInWithGitHub = () => {
        return signInWithPopup(auth, gitHubProvider);
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, [])

    const authInfo = {
        user,
        setUser,
        createNewUser,
        userVerifyEmail,
        userLogin,
        updateUserProfile,
        userLogInWithGoogle,
        userLogInWithGitHub,
        loading,
        logOut,
        passwordReset
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;