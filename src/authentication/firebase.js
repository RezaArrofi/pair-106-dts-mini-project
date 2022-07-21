// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut
} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGVVuAJZnEgZly46ywqD8U2L6szeiYrl4",
  authDomain: "dts2022-reza.firebaseapp.com",
  projectId: "dts2022-reza",
  storageBucket: "dts2022-reza.appspot.com",
  messagingSenderId: "995062906842",
  appId: "1:995062906842:web:4c23c46bbb5bcdf0e78ae3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const register = async(email, password) => {
  try{
    const userRegister = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userRegister);
  } catch(err) {
    console.log(err);
  }
};

const login = async(email, password) => {
  try{
    const userLogin = await signInWithEmailAndPassword(auth, email, password)
    console.log(userLogin);
  } catch (err) {
    console.log(err);
  }
};

const forgetPassword = async(email) => {
  try{
    await sendPasswordResetEmail(auth, email)
  } catch (err){
    console.log(err);
  }
};

const logout = async() => {
  try{
    await signOut(auth)
  } catch(err){
    console.log(err)
  }
};


export {
  auth,
  register,
  login,
  forgetPassword,
  logout
}
