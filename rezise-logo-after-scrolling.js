var y;
var scroll = true;

document.getElementById("myDIV").onscroll = function() { myFunction() };

function myFunction() {
    y = window.scrollY;
    if (y>250 && scroll==true) {
        scroll = false;
        var element = document.getElementById("Scroll");
        element.classList.add("myscroll");    
        
        var element = document.getElementById("mynav");
        element.classList.add("myscrollNav"); 

        for (var i = 0; i < document.getElementsByClassName("nav-link").length; i++) {

            var element = document.getElementsByClassName("nav-link")[i];
            element.classList.add("myscrollNavcolor"); 
        }
    }    

    if (y<250  && scroll==false) { 
        scroll = true;        
    }
}