import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, doc, getDoc, query, where } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBpJr4_4HmQZ4hWPGngi2LJW3j0iCB8_RY",
    authDomain: "van-life-ee41c.firebaseapp.com",
    projectId: "van-life-ee41c",
    storageBucket: "van-life-ee41c.appspot.com",
    messagingSenderId: "720956401340",
    appId: "1:720956401340:web:078bbb7f7f102d5c6c92b9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "Vans");

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
     
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "Vans", id)

    const vanSnapShot = await getDoc(docRef)

    return vanSnapShot.data()
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "1"))

    const querySnapshot = await getDocs(q)

    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}