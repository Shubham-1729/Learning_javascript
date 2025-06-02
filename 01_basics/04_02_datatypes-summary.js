// Primitive

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const isLoggediN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)

// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["Shaktimaan", "Krishh", "Superman"]
let myObj = {
    name: "Shubham",
    age: 22
}

const myfunction = function(){
    console.log("hello World");
}
console.log(typeof myfunction);
console.log(typeof score);
console.log(typeof isLoggediN);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof heros)


// *********************** Memory ********************************

// stack (Primitive), Heap (Non Primitive)

let myYoutubemname = "shubham_yt_channel"
let anothername = myYoutubemname
anothername = "Youtube_Channel 2"
console.log(myYoutubemname);
console.log(anothername
);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let user2 = user1
user2.email = "shubham@google.com"
console.log(user1);
console.log(user2);






