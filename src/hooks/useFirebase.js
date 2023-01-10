import { useState } from "react";
import { db } from "../firebase/firebase.js";
import {collection, getDocs, query, where, setDoc, doc} from "firebase/firestore/lite";

export const useFirebase = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [user, setUser] = useState("")

    const getData = async (email) => {

        try {
            setLoading(true);
            const dataRef = collection(db, "forms");
            const q = query(dataRef, where("email", "==", email))
            const querySnapshot = await getDocs(q);
            const dataDB = querySnapshot.docs.map((doc) => doc.data());
            setData(dataDB);
            setError("");

            if (dataDB.length === 0) {
                throw new Error("No hay respuestas para el email indicado");
            }

        } catch (error) {

            setError(error.message);
        } finally {

            setLoading(false);
        }
    }

    const addData = async(name, birth ,email, country, agree) => {
        try {
            setLoading(true)

            const newDoc = {
                fullName: name,
                email: email,
                birthdate: birth,
                country: country,
                agree: agree
            }

            const docRef = doc(db, "forms", email);
            await setDoc(docRef, newDoc);
            setData([...data, newDoc]);
            
        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);
        }
    }

    return {
        data, error, loading, setUser, user, getData, addData
    }
}