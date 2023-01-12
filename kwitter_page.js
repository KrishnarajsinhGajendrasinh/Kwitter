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
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
//ADD YOUR FIREBASE LINKS HERE

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
    });

    document.getElementById("msg").value = "";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = ChildKey;
    message_data = ChildData;
}
    Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
    });
}
getData();

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName()
{
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}
