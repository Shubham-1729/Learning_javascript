// const tinderUser = new Object() // Singleton

const tinderUser = {} // Non singleton

tinderUser.id = "12abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfulllname: {
            firstname: "Shubham",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfulllname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id : 1,
        email: "s@gmail.com",
    },
    {
        id : 1,
        email: "s@gmail.com",
    },
    {
        id : 1,
        email: "s@gmail.com",
    },
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    coursementor:  "Hitesh"
}

const {coursementor: mentor} = course
console.log(mentor);


// {
//     "name":  "Shubham",
//     "coursename": "js in hindi",
//     "price":"free"
// }

