import { app } from "../firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"


const AuthContext = React.createContext();

export function useAuth() {
	return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [firebaseUser, setFirebaseUser] = useState();
	const [backendUser, setBackendUser] = useState();
	const [loading, setLoading] = useState(true);
	const history = useHistory();
	// const location = useLocation();
	const auth = getAuth();
	async function signup() {
		try {
			const provider = new GoogleAuthProvider();
			provider.setCustomParameters({
				'login_hint': 'user@gmail.com'
			});
			const result = await signInWithPopup(auth, provider);
			console.log("User Signed In:");
			console.log(result.user);
		} catch (error) {
			console.log(error);
		}
	}
	async function logout() {
		setBackendUser(undefined);
		await signOut(auth);
		history.push("/home");  // sends the user to home after logout
	}
	async function signInBackend(user) {
		try {
			let backendUser;
			if (user) {
				const credential = GoogleAuthProvider.credentialFromResult(user);
				const res = await axios.post(
					"/dest/", // send token back
					{
						headers: {
							authorisation: `Bearer ${credential.accessToken}`,
						},
					}
				);
				backendUser = res.data;
			}
			setBackendUser(backendUser);
			return backendUser;
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged((user) => {
			setFirebaseUser(user);
			signInBackend(user).then((bcUser) => {
				setLoading(false);
				if (user && bcUser) {
					history.push("/home") // if user exists in backend send to home
				} else if (user && !bcUser) {
					history.push("/registration"); // if user does not exist in backend send to register
				}
			});
		});
		return unsuscribe;
	}, []);
	const value = {
		firebaseUser,
		backendUser,
		setBackendUser,
		signup,
		logout,
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}