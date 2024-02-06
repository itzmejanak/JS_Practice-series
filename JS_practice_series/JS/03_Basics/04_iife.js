// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();             //use ; always into IIFFE to end the function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


//why we use it
//>> to reduce the global scope pollution

//how to understand IIFE
//take full function into () parenthesis like:-
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})

//then just call it by next parenthisis ():-
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//just like that:-
chai();    //lets destructure it

//chai take our full function into () and we call it by using next parenthisis ();
