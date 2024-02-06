
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()     = execution
// sayMyName       = refererence

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
            //pass the number to use inside{}
function addTwoNumbers(number1, number2){    //which are parameter

    // let result = number1 + number2
    // return result
    return number1 + number2
}
addTwoNumbers(3, 4); //giving the number to add which are arguments

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("janak"))
// console.log(loginUserMessage("janak"))


function calculateCartPrice(val1, val2, ...num1){        //...num1 = rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

//HOW TO USE OBJECT INTO FUNCTION ?
const user = {
    username: "janak",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


//HOW TO USE Arrays INTO FUNCTION ?
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));