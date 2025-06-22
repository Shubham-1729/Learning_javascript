const user = {
    username : "Shubham",
    prrice : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "shubham"
//     console.log(this.username);
    
// }
// chai()

// const chai = () => {
//     let username = "Shubham"
//     console.log(this);   
// }
// chai()

// const add2 = (num1, num2) => {
//     return num1 + num2
// }

// const add2 = (num1, num2) =>  num1 + num2

// const add2 = (num1, num2) =>  (num1 + num2)

const add2 = (num1, num2) => ({username: "Shubham"})


console.log(add2(3,4));

