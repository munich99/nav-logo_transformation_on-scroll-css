var y;
var scroll = true;

document.getElementById("myDIV").onscroll = function() { myFunction() };

function myFunction() {
    y = window.scrollY;
    if (y>250 && scroll==true) {
        
        document.querySelector("#Scroll").
        style ='transform: scale(1) translateY(6px); fill: black;';  

        document.querySelector("#Stroke").
        style='stroke:black';       

        for (var i = 0; i < document.getElementsByClassName("nav-link").length; i++) {

            var element = document.getElementsByClassName("nav-link")[i];
            element.classList.add("myscrollNavcolor"); 
        }

        scroll = false;
        console.log(scroll + "sollte wieder");
        
    }    

    if (y<250  && scroll==false) {            
        document.querySelector("#Scroll").
        style ='transform: scale(5) translateY(10vh); fill: white;';
        document.querySelector("#Stroke").
        style='stroke:white';
        scroll = true;   
    }
}