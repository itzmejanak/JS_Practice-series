//to learn js fully only learn
//1. Objects
//2. Events

// singleton
// Object.create           //it is made by constructor. we will learn later it


// object literals

const mySym = Symbol("key1")


const JsUser = {
  //keys and values
    name: "janak",
    "full name": "janak Choudhary",   //keys = full name  are treated as string by js if we write into "" or not         
    [mySym]: "mykey1",                 // to make some keys into specific symbol
    age: 18,
    location: "Jaipur",
    email: "janak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "janak@chatgpt.com"
// Object.freeze(JsUser)     //no changes with this key
JsUser.email = "janak@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);        //we are doing reference to obj by using this keyword
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());