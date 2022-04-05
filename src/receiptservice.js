/* eslint-disable */
import { collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "firebase_config";

const ReceiptCollection = collection(db, "beneficiaries");
const InternopayCollection = collection(db, "internopay");
class ReceiptDetails {
  addBeneficiaries = (newItem) => {
    return addDoc(ReceiptCollection, newItem);
  };
  updateBeneficiary = (id, updateItem) => {
    const receiptItem = doc(db, "beneficiaries", id);
    return updateDoc(receiptItem, updateItem);
  };
  updateItem = (id, updateItem) => {
    const receiptItem = doc(db, "internopay", id);
    return updateDoc(receiptItem, updateItem);
  };
  addItems = (newItem) => {
    return addDoc(InternopayCollection, newItem);
  };

  deleteItem = (id) => {
    const receiptItem = doc(db, "internopay", id);
    return deleteDoc(receiptItem);
  };

  getAllItems = () => getDocs(ReceiptCollection);

  getSingleItem = (id) => {
    const receiptItem = doc(db, "internopay", id);
    return getDoc(receiptItem);
  };
  getBeneSingleItem = (id) => {
    const receiptItem = doc(db, "beneficiaries", id);
    return getDoc(receiptItem);
  };
}

export default new ReceiptDetails();
