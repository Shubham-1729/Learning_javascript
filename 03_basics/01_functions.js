function sayMyName()
{
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

// sayMyName();

// function add2Numbers(num1, num2){
//     console.log(num1 + num2);
// }

// const result = add2Numbers(2,3)
// console.log("Result", result);

function add2Numbers(num1, num2){
    return num1 + num2;
}

const result = add2Numbers(2,3)
// console.log("Result: ", result);

function loginUserMessage(username = 'Shubh'){
    if (!username){
        console.log("pls enter a user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Shubham",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}

// handleObject(user)
handleObject({
    username: "Shubh",
    price: 399
})


const myNewArray = [200, 400, 600, 800]

function return2ndvalue(getArray){
    return getArray[1]
}
console.log(return2ndvalue(myNewArray));
