// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate); // frequently asked in interview

// let myCreateDate = new Date(2023, 0, 23)
let myCreateDate = new Date("2023-01-14")

console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getFullYear())

// `${newDate.getFullYear()} and the time is `

newDate.toLocaleDateString('default', {
    weekday: 'long',
})






