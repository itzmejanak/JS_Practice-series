// Dates
// For console window
console.log(Object.getOwnPropertyNames(Date.prototype));

let myDate = new Date()
// console.log(myDate.toString());          //better
// console.log(myDate.toDateString());
let bb = document.querySelector(".mydate");
let a = myDate.toDateString();
bb.innerHTML = a;
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
// console.log(myDate.toUTCString())

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})