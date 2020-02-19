(function(){
    "use strict";
    const pge = document.querySelector("body");
    var ftxt = document.querySelector("#one .text");
    var stxt = document.querySelector('#two .text');
    var ttxt = document.querySelector('#three .text');
    ftxt.className="clear";
    console.log(ftxt);
    var y = window.scrollY;
    var g = window.scrollX;
    g=600;
    window.scroll({top:0, left:g});

    window.addEventListener('wheel',function(e){
        e.preventDefault();
        if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){
            if(e.deltaY>0){
                g+=20;
            }
            else if (e.deltaY<0){
                g-=20;
            }
        }
        else{
            if(e.deltaX>0){
                g+=20;
            }
            else if(e.deltaX<0){
                g-=20;
            }
        }

        if(g>pge.scrollWidth){
            g=0;
        }
        if(g<0){
            g=pge.scrollWidth;
        }

        if((g>2500)&&(g<3500)){
            ftxt.className="text";
        }
        else{
            ftxt.className="clear";
        }

        if((g>4200)&&(g<5800)){
            stxt.className="text";
        }
        else{
            stxt.className="clear";
        }

        if((g>6200)&&(g<7400)){
            ttxt.className="text";
        }
        else{
            ttxt.className="clear";
        }
        
        window.scroll({top:0, left:g, behavior: 'auto'});
        this.console.log(g);
    });
}());