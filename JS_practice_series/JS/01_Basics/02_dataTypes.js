"use strict";  //treat all js code as newer version

//alert("hello");
//some also use it for arthemetic
//alert(3 + 3);          we are using node js not browser;

/*console.log(5+4); console.log("helo");*/
//also we have to use code readibility;
//this is the not good pratices

/*console.log(5+4); 
console.log("helo");*/
//this is the good practices

let name = "janak";  //string data types
let id  = 1234;    //intiger data types
let islogin = true;  //boolean data types
//null = standalone value which is types
//undifine = variables is decalere but the variable sis not define
let state = null;
//we can use it for giving tye temperatire value bucsie we can't send the temperatutre value 0 because that is not the not the apporprate value for the temperature.


//we can also find the types of the variable like;-
let myName = "janak devkota";
console.log(typeof myName);

//output should be:
//strings
console.table([name, id, islogin, state, myName]);

// all output should be:
/**
 * string
┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 'janak'         │
│ 1       │ 1234            │
│ 2       │ true            │
│ 3       │ null            │
│ 4       │ 'janak devkota' │
└─────────┴─────────────────┘
 */