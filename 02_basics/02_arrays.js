const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'batman', 'antman']

// marvel_heros.push(dc_heros)


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// marvel_heros.concat(dc_heros)
console.log(marvel_heros.concat(dc_heros));

const all_new_heros = [...marvel_heros, ...dc_heros]


console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array.flat(Infinity));

console.log(Array.isArray("Shubham"));
console.log(Array.from("Shubham")); // string ko array me badalne ke liye
// console.log(Array.from({name: "Shubham"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

// ******************** Summary of array *****************************

// Push
// pop 
// unshift
// shift
// join -> array to string
// include
// indexof
// Slice 
// Splice 
// addition of array -> push, concat,spread, 
// flat(infinity) -> to split nested array FileList
// isArray
// from -> to convert a string into array
// of
