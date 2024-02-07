// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);          
//     return item        // for each loop do't return value
// } )

// console.log(values);


// if we want to return specific part of the obj and array then,

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//filter also take call back  function
// const newNums = myNums.filter( (num) => {        //filter operation
//     return num > 4         //it is explicit return
// } )
// console.log(newNums);


//if we want to do same things by for each then ?
// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  //implicit return
  let userBooks = books.filter( (bk) => bk.genre === 'History')  //bk.genre === 'History' = this is the filter we want


  // by explicit return
  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);