//we are doing here object singleton 
//using constructor

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "janak",
            lastname: "Devkota"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}                   //spread operator most we use for arrays and for obj
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));          //to exact keys
// console.log(Object.values(tinderUser));        //to exact values
// console.log(Object.entries(tinderUser));        //to exact enteries into form of key an values into arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));       //to ask if the object have specific properties


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "janak"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// this tells that take courseInstructor into new named instructor from the obj course and access the current destructured name instructor.

console.log(courseInstructor);
// >> this is called the object destructuring              //out = same from both console.log
console.log(instructor);

// {
//     "name": "janak",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},               // Object into One Array
    {}
]

// [] = arrays
// {} = Objects