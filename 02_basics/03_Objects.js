// Singleton
// Object.create

// Object literals

const mysym = Symbol("Key1")

const Jsuser = {
    name: "Shubham",
    "full name": "Shubham kumar",
    [mysym]: "myKey1",
    age: 23,
    location: "Delhi",
    email: "Shubham@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.name);
console.log(Jsuser["full name"]);
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser[mysym]);
console.log(typeof Jsuser.mysym);

Jsuser.email = "Shubham@chatgpt.com"
console.log(Jsuser.email);
Object.freeze(Jsuser);
Jsuser.email = "shubham@hotmail.com"
console.log(Jsuser.email);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

// const obj ={
//     a: 1,
//     b:2,
//     sum(){
//         return this.a + this.b
//     }
// }
// const res = obj.sum;
// console.log(res());




