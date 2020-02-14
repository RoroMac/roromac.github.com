(function(){
    "use strict";
    var txt=document.getElementById("change");
    var myForm = document.querySelector("form");
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        var formData= document.querySelectorAll("input").value;
        console.log(formData[0]);
    });
}());