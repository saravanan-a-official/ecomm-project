import { doc, getDoc } from "firebase/firestore";
import { db } from './firebase';

export async function getCartDataFromFirebase(userName) {
    const docRef = doc(db, "cart-data", userName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("cart data from firebase", docSnap.data());
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return undefined;
    }
}