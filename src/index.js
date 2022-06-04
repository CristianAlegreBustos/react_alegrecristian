import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from "firebase/app";
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-o3J2T_Rgid5zJJKV34Ezt9AITzMXYbA",
  authDomain: "carro-de-compras-161f8.firebaseapp.com",
  projectId: "carro-de-compras-161f8",
  storageBucket: "carro-de-compras-161f8.appspot.com",
  messagingSenderId: "689329288108",
  appId: "1:689329288108:web:5a3afe8b4656bf754c0009"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
