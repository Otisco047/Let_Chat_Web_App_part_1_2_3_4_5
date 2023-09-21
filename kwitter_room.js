//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
firebaseConfig = {
      apiKey: "AIzaSyDPbw0or7IVYXPQdrJrDAm7DcVyJ_qW3UE",
      authDomain: "kwitter-b13fa.firebaseapp.com",
      databaseURL: "https://kwitter-b13fa-default-rtdb.firebaseio.com",
      projectId: "kwitter-b13fa",
      storageBucket: "kwitter-b13fa.appspot.com",
      messagingSenderId: "1060586003474",
      appId: "1:1060586003474:web:a41d559af7dcc423ec0ccb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_key");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Main_folder_names = childKey;
                  console.log(Main_folder_names);
                  div_tag = '<div class="room_name" id="' + Main_folder_names + '" onclick="redirect(this.id)">' + Main_folder_names + '</div><hr>';
                  document.getElementById("output").innerHTML += div_tag;
                  //Start code

                  //End code
            });
      });
}
getData();

function addRoom() {
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "room created"
      });
      localStorage.setItem("room_key", roomname);
      window.location = "kwitter_message.html";
}

function redirect(room_id) {
      localStorage.setItem("room_key", room_id);
      window.location = "kwitter_message.html";

}

function logout() {
      localStorage.removeItem("user_key");
      localStorage.removeItem("room_key");
      window.location = "index.html";

}