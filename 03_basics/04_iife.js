// Immediately Invoked Function expressions(IIFE)
// global scope se pollute hone se bachne ke liye iife ka use krte hain
(function chai (){
    //named iife
    console.log(`DB CONNECTED`);
})();


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Shubham')
