
document.getElementById("myDIV").onscroll = function() {myFunction()};

function myFunction() {
    var y = window.scrollY;
    if (y>250) alert(y);
}