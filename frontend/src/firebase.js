// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import storage for file uploads

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmbqKTrAAl2sgZTULHVXxXLIOqdtNSgr8",
  authDomain: "kriti-b50f5.firebaseapp.com",
  projectId: "kriti-b50f5",
  storageBucket: "kriti-b50f5.appspot.com", // Corrected `storageBucket` URL
  messagingSenderId: "1012783006813",
  appId: "1:1012783006813:web:33a4327927d591299539b4",
  measurementId: "G-2JV4VBWV0M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional: If using Analytics
const storage = getStorage(app); // For file uploads

// Export the necessary Firebase services
export { app, analytics, storage };
