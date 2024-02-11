const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
// or

const rndclr = function randomColor() {
    // Generate random RGB values
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // Construct and return color string in RGB format
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

let bg = document.querySelector("#container");
let stBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let set = document.querySelector("#setFast");
let msg = document.querySelector("#msg");
let clearit;

let startChangingColor = function(){
    // Check if the interval is already running to prevent overlapping intervals
    if (set.value === "") {
        msg.innerHTML = "Please set your Speed!";
    } else if (isNaN(set.value)) {
        stopChangingColor();
        msg.innerHTML = "Input should be a valid number!";
    }else{
        if (!clearit) {
            msg.innerHTML = "See The Magic!";
            clearit = setInterval(function() {
                bg.style.backgroundColor = randomColor();
                document.body.style.backgroundColor = rndclr();
            }, set.value*1000);
        }
    }
  
};

let stopChangingColor = function(){
    clearInterval(clearit);
    clearit = null; // Reset clearit to null when stopping
};

stBtn.addEventListener("click", startChangingColor);
stopBtn.addEventListener("click", stopChangingColor);
