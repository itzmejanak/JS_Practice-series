//Most used loops in js for both array and obj or in both at a same time
// For each

const coding = ["js", "ruby", "java", "python", "cpp"]

// the function used into for each loop called back function so it don't have name

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)    //by giving reference to the function name

// coding.forEach( (item, index, arr)=> {      //we can pass more then one parameter into foreach
//     console.log(item, index, arr);
// } )


//we can use for each into array which have multiple or one obj
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
