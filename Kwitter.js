const firebaseConfig = {
    apiKey: "AIzaSyC4M4tg_78G4A2IyQkR4t1USfuGFZoTxL8",
    authDomain: "let-chat-web-app-2-c4699.firebaseapp.com",
    projectId: "let-chat-web-app-2-c4699",
    storageBucket: "let-chat-web-app-2-c4699.appspot.com",
    messagingSenderId: "388921895448",
    appId: "1:388921895448:web:3c019245509873b01c716d"
  };
const app = initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";    
    }

function removeUser(){
        user_name = document.getElementById("user_name").value;
        localStorage.removeItem("user_name", user_name);
        window.location = "kwitter_room.html";    
        }

function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_room.html";}
        










