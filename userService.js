import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addUser = async (userData, userId) => {
  try {
    const docRef = await addDoc(collection(db, `users/${userId}`), userData);
    console.log("Usuario añadido con ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error añadiendo usuario: ", e);
    throw e;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    await updateDoc(doc(db, "users", userId), userData);
    console.log("Usuario actualizado");
  } catch (e) {
    console.error("Error actualizando usuario: ", e);
    throw e;
  }
};

export const getUser = async (id) => {
  try {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  } catch (e) {
    console.error("Error obteniendo usuarios: ", e);
    throw e;
  }
};

export const deleteUser = async (userId) => {
  try {
    await deleteDoc(doc(db, "users", userId));
    console.log("Usuario eliminado");
  } catch (e) {
    console.error("Error eliminando usuario: ", e);
    throw e;
  }
};

export const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error obteniendo usuarios: ", e);
    throw e;
  }
};
