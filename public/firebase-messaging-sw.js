importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,  
});

const messaging = firebase.messaging();

