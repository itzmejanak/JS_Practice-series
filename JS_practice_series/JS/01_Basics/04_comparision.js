//this comparision have no any problem
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
//output
/**
 * PS C:\Users\janak\OneDrive\Desktop\JS\JS_practice_series\jS> node 04_comparision.js
true
true 
false
false
true
 */


// we get problem here
console.log("2" > 1);
console.log("02" > 1);
//output
/**
 * PS C:\Users\janak\OneDrive\Desktop\JS\JS_practice_series\jS> node 04_comparision.js
true
true
 */

//we willl get issue here to
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//output
/**
 * PS C:\Users\janak\OneDrive\Desktop\JS\JS_practice_series\jS> node 04_comparision.js
false
false
true
 */


//Same here we get some out of mind result
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//output
/**
 * PS C:\Users\janak\OneDrive\Desktop\JS\JS_practice_series\jS> node 04_comparision.js
false
false
false
 */


//=== 

console.log("2" === 2);
//output
/**
 * PS C:\Users\janak\OneDrive\Desktop\JS\JS_practice_series\jS> node 04_comparision.js
false
 */