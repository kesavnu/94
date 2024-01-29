
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD-i088FsCiMUDb0t2r4m4sKN0KJFJdENo",
      authDomain: "kwitter-fb384.firebaseapp.com",
      databaseURL: "https://kwitter-fb384-default-rtdb.firebaseio.com",
      projectId: "kwitter-fb384",
      storageBucket: "kwitter-fb384.appspot.com",
      messagingSenderId: "1061018872903",
      appId: "1:1061018872903:web:aad4003b89842bf12b5562"
    };
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
