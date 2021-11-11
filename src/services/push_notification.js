import firebase from "firebase";
import { useAuth } from "../contexts/Auth";
import {db} from "./firebase";

//! Todo Authorization
//! Todo change slug retrieval method

export const saveEateryOwnerToken = async () => {
    try {
  
      const messaging = firebase.messaging();
        
      messaging.onMessage((payload) => {
        console.log(payload,"payload");
      })

      const token = await messaging.getToken();

    const slug = localStorage.getItem("slug");

      // saving token of eatery owner
    //   db.collection("owners").doc(currentUser.uid).get()
    //   .then((ownerDoc) => {
    //     //   ownerDoc.forEach((doc) => {
    //     //       if(!doc.data().token){
    //     //           db.collection("owners").doc(doc.id).set({
    //     //               ...doc.data(),
    //     //               token
    //     //           })
    //     //       }
    //     //   })
    //     if(!ownerDoc.data().token) {
    //         db.collection("owners").doc(ownerDoc.id).set({
    //             ...ownerDoc.data(),
    //             token
    //         })
    //     }
    //   })

    db.collection("owners").where("slug","==",slug)
    .get().then((ownerDoc) => {
        ownerDoc.forEach((doc) => {
            if(!doc.data().token){
                db.collection("owners").doc(doc.id).set({
                    ...doc.data(),
                    token
                })
            }
        })
    })

        return token;
    } catch (error) {
        return error;
    }
  }