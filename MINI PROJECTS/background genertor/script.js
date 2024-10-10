
var css= document.querySelector("h3");

let h1el =document.querySelector("h1")
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var color3 = document.querySelector("#color3");
var body = document.getElementById("bold");

function setGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ", " + color3.value +")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input" , setGradient);
color2.addEventListener("input" ,setGradient);
color3.addEventListener("input" ,setGradient);

function myFuction() {
    //select the element with the id "copyMe", must be a text box
    var textToCopy = document.getElementById("myInput");
    //select the text in the text box
    textToCopy.select();
    //copy the text to the clipboard
    document.execCommand("copy");
}

