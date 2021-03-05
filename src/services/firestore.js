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
	const sampleMeals = [
		{ endsAt: "09:31", isSpecial: true, menu: ["item1", "item2", "item3"], startsAt: "07:30", name: "Breakfast" },
		{ endsAt: "14:31", isSpecial: false, menu: ["item1"], startsAt: "12:00", name: "Lunch" },
		{ endsAt: "14:31", isSpecial: false, menu: [], startsAt: "12:00", name: "Hi-TEA" },
		{ endsAt: "14:31", isSpecial: false, menu: ["item1"], startsAt: "12:00", name: "Dinner" },
	];
	return db.collection("mess").doc("menuData").set({ meals, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
};
