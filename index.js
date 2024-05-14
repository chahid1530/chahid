
const element = document.getElementById("cookie");
 
element.addEventListener("click", myFunction);
 
function myFunction() {
    counter++;
    teller.innerHTML = counter +" <br>cookies";
}
 
const teller = document.getElementById("cookie-counter");
let counter = 0;