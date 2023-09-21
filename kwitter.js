function addUser() {
    User_name = document.getElementById("user_name").value;
    localStorage.setItem("user_key", User_name);
    window.location = "kwitter_room.html";
}