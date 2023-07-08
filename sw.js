importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js");

// Initialize Firebase app in the service worker
firebase.initializeApp({
  // Your Firebase configuration
});

const messaging = firebase.messaging();
