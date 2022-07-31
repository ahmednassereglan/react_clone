// import auth from "firebase/compat/auth";
// import storage from "firebase/compat/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage  } from "firebase/storage";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2yC-fX-Ii_IF_83yi8HVATguej5zUffE",
  authDomain: "desniy-db1d4.firebaseapp.com",
  projectId: "desniy-db1d4",
  storageBucket: "desniy-db1d4.appspot.com",
  messagingSenderId: "136717396035",
  appId: "1:136717396035:web:589b82f9175884b7828cf6",
  measurementId: "G-P9TFXSP6ZG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const provider = new auth.GoogleAuthProvider();
const storage = getStorage(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage,analytics };
export default db;