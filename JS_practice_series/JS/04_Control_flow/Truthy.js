const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//how to differenciate ?
// if string "" contain some thing inside and object, array and function are truthy values 
// else falsy value


// HOW TO CHECK THE ARRAYS IS EMPTY AR NOT?
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// HOW TO CHECK THE OBJECT IS EMPTY AR NOT?
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {    //here also we converted obj to array and use length property
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")