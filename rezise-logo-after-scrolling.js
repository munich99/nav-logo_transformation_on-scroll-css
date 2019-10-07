var y;
var scroll = true;

document.getElementById("myDIV").onscroll = function() { myFunction() };

function myFunction() {
    y = window.scrollY;
    if (y>250 && scroll==true) {
        
        document.querySelector("#Scroll").
        style ='transform: scale(1) translateY(6px); fill: #354731;';  

        document.querySelector("#Stroke").
        style='stroke:#354731';

        document.querySelector("#mynav").
        style='background-color:white!important;';

 

        for (var i = 0; i < document.getElementsByClassName("nav-link").length; i++) {
            var element = document.getElementsByClassName("nav-link")[i];
            element.classList.add("myscrollNavcolor"); 
        }

        document.querySelector("#mobileLogo").
        style='transform: translateY(-35vh);';

        document.querySelector(".navbar-toggler").
        style='border-color: rgba(53, 71, 49, 0.15)';

        document.querySelector(".navbar-toggler-icon").
        style='filter: invert(50%)';

        scroll = false;
        console.log(scroll + "sollte wieder");
        
    }    

    if (y<250  && scroll==false) {            
        document.querySelector("#Scroll").
        style ='transform: scale(5) translateY(10vh); fill: white;';

        document.querySelector("#Stroke").
        style='stroke:white';

        document.querySelector("#mynav").
        style='background-color:#354731!important;';

        for (var i = 0; i < document.getElementsByClassName("nav-link").length; i++) {
            var element = document.getElementsByClassName("nav-link")[i];
            element.classList.remove("myscrollNavcolor"); 
        }

        document.querySelector("#mobileLogo").
        style='transform: translateY(5);';

        document.querySelector(".navbar-toggler").
        style='border-color: rgba(255,255,255,.1);';

        document.querySelector(".navbar-toggler-icon").
        style='filter: brightness(1)';

        scroll = true;   
    }
}