const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => num + 10)
// or
// const newNums = myNumers.map( (num) => { 
//     return num + 10;
// });


//Chaining
// >> for eg:- map().map().filter()  = using multiple operation is chainaing

const newNun = myNumers.map((num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 40)
console.log(`this is the valus ${newNun}`);

//or 
//prefered this
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNums);