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

  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
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



  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }


function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}