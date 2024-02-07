//iteration of obj through loop
// for in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`); 
    // here key  denote only keys and myObject.[key] denote values
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);         // only gives us index num of the array
    //console.log(programming[key]);        // this will give us values
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }