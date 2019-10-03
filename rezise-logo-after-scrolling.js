var y;
var scroll = true;

document.getElementById("myDIV").onscroll = function() {myFunction()};

function myFunction() {
    y = window.scrollY;
    if (y>250 && scroll==true) {        
        console.log(y); 
        scroll = false;
    }
    if (y<250  && scroll==false) { 
        scroll = true; 
        console.log("small");
    }
}