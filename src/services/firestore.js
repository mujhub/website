import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app();
}
const db = firebase.firestore();

export const auth = firebase.auth();

export const getMessMenu = () => {
	return db.collection("mess").doc("menuData").get();
};

export const setMessMenu = (meals) => {
	return db.collection("mess").doc("menuData").set({ meals, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
};
