//website configurations
var firebaseConfig = {
    apiKey: "AIzaSyAnSKPNcj96bdPJjtP3U94bwzDtz5rg1Zg",
    authDomain: "diot-e7ada.firebaseapp.com",
    databaseURL: "https://diot-e7ada.firebaseio.com",
    projectId: "diot-e7ada",
    storageBucket: "diot-e7ada.appspot.com",
    messagingSenderId: "814764602260",
    appId: "1:814764602260:web:8fc5a80da215a6f7595581"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//header animation
var next = document.querySelector("header > h5 > span");
var clear =document.querySelector("header");
var showfi = document.getElementById("first");

next.addEventListener("click", function(e){
    clear.classList.remove(".showhead");
    clear.className ="clearHead";
    showfi.classList.remove(".clearfi")
    showfi.className = "showfi";
});







var choices = document.querySelectorAll("#choice .button"); //
var secs = document.getElementById("second"); //div section shows up when gets clicked
var webL = document.getElementsByClassName("container"); //shows entire list for websites
var docuview = document.getElementById("third");


choices.forEach(function(choice){
    choice.addEventListener('click', showt);
})

function showt(event){
    event.preventDefault();
    secs.style.visibility="visible";
    var selection = event.target.value; //selection matches the button being pressed
    // displayList(selection); //pass selection values
    displayChoice(selection);
}

function displayChoice(selection){
    var dbRef= firebase.database().ref('websites');
    dbRef.on("child_added", function(snapshot){
        var web = snapshot.val();
        var ids = snapshot.key;
        console.log(web);
        console.log(ids);
    });
}





function displayList(selection){
    var dbRef = firebase.database().ref('websites');
    console.log(dbRef);
    dbRef.on("child_added",function(snapshot){
        console.log(snapshot.val());
        var web =snapshot.val();
        var ids = snapshot.key;
        console.log(ids.length);
        console.log(web);
        var theListItem = document.createElement('li');
        theListItem.setAttribute("id", `r-${ids}`);
        theListItem.innerHTML = `
        <div class="name">
            ${web.name}
        </div>
        <div class="cate">
            ${web.category}
        </div>
        <div class="img">
            <a href="${web.url}>Here!</a>"
        </div>`
        webL.appendChild(theListItem);
    })
}