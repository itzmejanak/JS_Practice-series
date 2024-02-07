let form  = document.querySelector("form");
// This useCase will give us empty
// let height = document.querySelector("#height").value

form.addEventListener('submit', function(dets){
    dets.preventDefault();         //for stoping the sendint to server
    let height = document.querySelector("#height").value;
    let finalHeight = parseInt(height);
    let weight = document.querySelector("#weight").value;
    let finalWeight = parseInt(weight);
    let result = document.querySelector("#results");
    if(finalHeight == "" || finalHeight < 0 || isNaN(finalHeight)){
        result.innerHTML = `Please give us valid Height ${finalHeight}`;
    }else if(finalWeight == "" || finalWeight < 0 || isNaN(finalWeight)){
        result.innerHTML = `Please give us valid weight ${finalWeight}`
    }else{
        var bmi = (finalWeight / ((finalHeight * finalHeight) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }


//more optimized for user
let msg1 = document.querySelector("#msg1");
let msg2 = document.querySelector("#msg2");
let msg3 = document.querySelector("#msg3");

let allMsgs = document.querySelectorAll(".msg");
allMsgs.forEach((msg) => {
    msg.style.color = ""; // Reset color
    msg.style.fontSize = ""; // Reset font size
});

if(bmi <= 18.6){
    msg1.style.color = "#03d555";
    msg1.style.fontSize = "20px"
}else if(bmi > 18.6 && bmi <= 24.9){
    msg2.style.color = "#03d555";
    msg2.style.fontSize = "20px"
}else if(bmi > 24.9){
    msg3.style.color = "#03d555";
    msg3.style.fontSize = "20px"
}
})

