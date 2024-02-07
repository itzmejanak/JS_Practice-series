let clock = document.querySelector("#clock");
//let clock = document.getElementById("clock");
// let date = new Date();
// clock.innerHTML = date;

setInterval( function() {
    let date = new Date().toLocaleTimeString();
    clock.innerHTML = date;
    // clock.style.color = "white";
    clock.style.fontWeight = "900";
}, 1000);