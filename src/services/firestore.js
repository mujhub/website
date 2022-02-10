import { db, currentTimestamp } from './firebase';

export const getMessMenu = () => {
	return db.collection('mess').doc('menuData').get();
};

export const setMessMenu = ({ meals, notify }) => {
	return db.collection('mess').doc('menuData').set({ meals, notify, updatedAt: currentTimestamp });
};

export const getBookStoreData = () => {
	return db.collection('menus').doc('kumawat-stationery').get();
};
