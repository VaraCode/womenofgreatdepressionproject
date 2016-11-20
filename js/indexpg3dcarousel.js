// JavaScript File

// 3D Carousel Home Page INDEX 
//Source of 3D carousel: https://codepen.io/dudleystorey/pen/kiajB


var angle = 0;

function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

// jQuery: slideToggle() function for photo citation
$(document).ready(function(){
    $("#flipindex1").click(function(){
        $("#panelindex1").slideToggle("slow");
    });
});