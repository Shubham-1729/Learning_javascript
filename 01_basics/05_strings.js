const name = "Shubham"
const repo = 20

// console.log(name + repo + "value")

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('Shubham-kr-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('b'));


const newString = gameName.substring(0,4) // if we use negative value here it will ignore 
                                        //the index and start from 0
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newString1 = "   Shubham   "
console.log(newString1);
console.log(newString1.trim());
console.log(newString1.trimStart());
console.log(newString1.trimEnd());

const url = "https://shubham.com/shubham%20kumar"

console.log(url.replace('%20','-'));
console.log(url); // since const is a primitve data type but still it does not changes the original string cuz it returning it as new string so consoling it does not modify the original one.

console.log(url.includes('shubham'));

console.log(gameName.split('-'));

