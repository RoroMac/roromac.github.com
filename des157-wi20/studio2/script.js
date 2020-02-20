(function(){
    "use strict";
    const pge = document.querySelector("body");
    var ftxt = document.querySelector("#one .text");
    var stxt = document.querySelector('#two .text');
    var ttxt = document.querySelector('#three .text');

    //init
    ftxt.className="clear";
    stxt.className="clear";
    ttxt.className="clear";
    console.log(ftxt);
    var y = window.scrollY;
    var g = window.scrollX;
    g=1000;
    window.scroll({top:0, left:g});

    //array of navigation points
    const pt= [1000,3200,5900,8300,10500];
    //array of counter
    var count =0;

    //scroll event listener
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
            count=0;
        }
        if(g<0){
            g=pge.scrollWidth;
            count=4;
        }

        if((g>2900)&&(g<3700)){
            ftxt.className="text";
            count =1;
        }
        else{
            ftxt.className="clear";
        }

        if((g>5500)&&(g<6600)){
            stxt.className="text";
            count=2;
        }
        else{
            stxt.className="clear";
        }

        if((g>8000)&&(g<8800)){
            ttxt.className="text";
            count=3;
        }
        else{
            ttxt.className="clear";
        }

        if((g>9800)&&(g<11150)){
            count =4;
        }
        
        window.scroll({top:0, left:g, behavior: 'auto'});
        this.console.log(g);
    });


    //arrow click event listener;
    const slect = document.querySelectorAll("span");
    for (const sec of slect){
        sec.addEventListener("click", function(e){
            if(sec.className=='left'){
                count--;
            }
            else if(sec.className=="right"){
                count++;
                if (count>pt.length-1){
                    count=0;
                    g=1190
                    window.scroll({top:0, left:g, behavior: 'smooth'});
                    g=0;
                    window.scrollTo(0,0);
                }
            }
            g=pt[count];
            window.scroll({top:0, left:g, behavior: 'smooth'});
            if((g>2900)&&(g<3700)){
                ftxt.className="text";
            }
            else{
                ftxt.className="clear";
            }
    
            if((g>5500)&&(g<6600)){
                stxt.className="text";
            }
            else{
                stxt.className="clear";
            }
    
            if((g>8000)&&(g<8800)){
                ttxt.className="text";
            }
            else{
                ttxt.className="clear";
            }
        });
    }
}());