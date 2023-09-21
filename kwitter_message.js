//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_key");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_key");
      localStorage.removeItem("room_key");
      window.location = "index.html";
}