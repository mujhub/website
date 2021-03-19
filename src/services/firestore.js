import { db, currentTimestamp } from "./firebase";

export const getMessMenu = () => {
	return db.collection("mess").doc("menuData").get();
};

export const setMessMenu = (meals) => {
	return db.collection("mess").doc("menuData").set({ meals, updatedAt: currentTimestamp });
};

export const getBookStoreData = () => {
	return db.collection("menus").doc("kumawat-stationery").get();
};
