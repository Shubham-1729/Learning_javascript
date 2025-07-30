// let myName = "Shubham     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shubham = function(){
    console.log(`shubham is present in all objects`);
    
}

// Array.prototype.heyshubham = function(){
//     console.log(`Shubham says hello`);
    
// }

// // heroPower.shubham()
// myHeros.shubham()
// myHeros.heyshubham()
// heroPower.heyshubham()

// // inheritance

// const user = {
//     name: "chai",
//     email: "chai@google.com"
// }
// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fulltime: true,
//     __proto__: TeachingSupport
// }
// Teacher.__proto__ = user

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

// let anotherUsername = "chaiAurCode    "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`${this.name}`);
//     console.log(`true length is: {this.trim().length}`);
// }