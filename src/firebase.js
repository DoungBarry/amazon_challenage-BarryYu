import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyC6-b-IaBIF4Qu0miza68eDZW0XHtuc4wQ",
  authDomain: "challenage-barryyu.firebaseapp.com",
  databaseURL: "https://challenage-barryyu.firebaseio.com",
  projectId: "challenage-barryyu",
  storageBucket: "challenage-barryyu.appspot.com",
  messagingSenderId: "850335035568",
  appId: "1:850335035568:web:754faa3b9598f7312d8b75",
  measurementId: "G-92KQ66W3BN"
};

//先定義出“應用程式”
// 前端反映到後端,,定義ＡＰＰ＝firebase的ＡＰＰ啟動器（ 置入消防氣設定 ）
const firebaseApp = firebase.initializeApp(firebaseConfig);

//定義 fireStore的數據庫 （ 從應用程式內的函式庫嵌入的firestore
const db = firebaseApp.firestore();
const auth = firebase.auth();

//New auth from google povider
const provider = new firebase.auth.GoogleAuthProvider();

//設定到這等於完成啟動器-- open tour firebase website =>cloud store



export { auth, db };
//導出認證和估格的認證

// export default db;
//export db 導出數據庫
