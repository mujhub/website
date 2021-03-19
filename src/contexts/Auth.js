import React, { useEffect, useState, createContext, useContext } from "react";
import { auth } from "../services/firebase";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setIsLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = { currentUser, login };

	return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>;
};
