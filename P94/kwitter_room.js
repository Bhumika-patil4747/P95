const firebaseConfig = {
    apiKey: "AIzaSyC7iKIvRVd52ZKi4YwRffLptmbDiIqNGUY",
    authDomain: "p-continue.firebaseapp.com",
    projectId: "p-continue",
    storageBucket: "p-continue.appspot.com",
    messagingSenderId: "69417629291",
    appId: "1:69417629291:web:104f6cb6377a5bd7e5232e"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);

   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom(){
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose:"adding room name"
   });

   localStorage.setItem("room_name", room_name);
   window.location = "index.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "index.html";
}