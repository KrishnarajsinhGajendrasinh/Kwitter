var firebaseConfig = {
  apiKey: "AIzaSyCUICCbJkCBiEuVQB0WmP9tMWpaOiKwcdw",
  authDomain: "let-schatit-web-app.firebaseapp.com",
  databaseURL: "https://let-schatit-web-app-default-rtdb.firebaseio.com",
  projectId: "let-schatit-web-app",
  storageBucket: "let-schatit-web-app.appspot.com",
  messagingSenderId: "366591642987",
  appId: "1:366591642987:web:ed1310acdc81032117102e",
  measurementId: "G-JEJ5TJ2N5R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser() 
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name",user_name);

    window.location = "kwitter_page.html";
}

