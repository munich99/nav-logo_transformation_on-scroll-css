var y;
var scroll = true;

document.getElementById("myDIV").onscroll = function() {myFunction()};

function myFunction() {
    y = window.scrollY;
    if (y>250 && scroll==true) {
        scroll = false;
        var element = document.getElementById("Scroll");
        element.classList.add("myscroll");        
    }    
    if (y<250  && scroll==false) { 
        scroll = true;        
    }
}