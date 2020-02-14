(function(){
    "use strict";
    const pe = document.querySelector("p");
    //changeable element
    let txt= document.getElementById("change");
    //access form data
    const myForm= document.querySelector('form');
    myForm.addEventListener('submit', function(e){
        e.preventDefault();
        const formData=document.querySelectorAll('input');
        txt.innerHTML=`One day, ${formData[0].value} wanted to ${formData[1].value} the world \n.
                      However, to do that they need to ${formData[2].value} ${formData[3].value}. \n
                      While it might take them years, they felt ${formData[4].value} about their future goals.`;
        let imFun = document.querySelector("div");
        imFun.style.visibility= "visible";
        myForm.style.visibility="hidden";
        pe.style.visibility="hidden";
        txt.style.marginTop="-17em";
    })
}());