import { db, currentTimestamp } from "./firebase";

export const getMessMenu = () => db.collection("mess").doc("menuData").get();

export const setMessMenu = meals =>
  db
    .collection("mess")
    .doc("menuData")
    .set({ meals, updatedAt: currentTimestamp });

export const getBookStoreData = () =>
  db.collection("menus").doc("kumawat-stationery").get();

export const getEateryOwner = (uid) => db.collection("owners").doc(uid).get();

export const getAllOrders = () => {
  const slug = localStorage.getItem("slug");

  db.collection("orders").where("shop","==",slug)
  .onSnapshot((querySnapshot) => {
    const orders = [];
    querySnapshot.forEach((doc) => {
      orders.push(doc.data());
      console.log(orders,"orders");
    })
    return orders;
  })
}
