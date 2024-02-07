let body = document.querySelector("body");
// body.style.backgroundColor = "red"
let allbtn = document.querySelectorAll(".button");
// allbtn.style.display = "none";

allbtn.forEach((all) => {
    // all.style.display = "none";
    all.addEventListener('click', function (dets){
        if(dets.target.id === "grey"){
            body.style.backgroundColor = dets.target.id;
            // body.style.backgroundColor = "grey";
        }else if(dets.target.id === "white"){
            body.style.backgroundColor = "white";
        }else if(dets.target.id === "blue"){
            body.style.backgroundColor = "blue";
        }else if(dets.target.id === "yellow"){
            body.style.backgroundColor = "yellow";
        }else{
            alert("Damm");
        }
    })
})