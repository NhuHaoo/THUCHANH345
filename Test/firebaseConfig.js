// Import các chức năng cần dùng
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyACbFUDhkkTjBqbnKGVj93e68K7cvuMED4",
  authDomain: "labapp345.firebaseapp.com",
  projectId: "labapp345",
  storageBucket: "labapp345.firebasestorage.app",
  messagingSenderId: "51427263038",
  appId: "1:51427263038:web:ef0d66b127d9451cd5476f"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Auth, Database và Storage
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
