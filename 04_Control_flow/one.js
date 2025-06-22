// if

const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    // console.log("less than 50");
} else {
    // console.log("temperature is greater than 50");
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${index}`);
}


// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) 
    {
    console.log(`${num}`);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }



