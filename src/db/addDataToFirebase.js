import { setDoc, doc } from "firebase/firestore";
import { db } from './firebase';

export async function addUpdateUserDataToFirebase(userData) {
    try {
        await setDoc(doc(db, "user-data", userData.name), userData);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function updateOrderDataToFirebase(userName, cartData) {
    try {
        await setDoc(doc(db, "order-data", userName), cartData);

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}