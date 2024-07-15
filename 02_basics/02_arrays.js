const marvel = ["ironman", "Thor", "Spiderman"];
const dc = ["superman", "Batman", "flash"];

// merging of two arrays


// marvel.push(dc);
// console.log(marvel);
// while using the push method the element is added as an array itself inside an array


const heros = marvel.concat(dc);
// console.log(heros);
// while we use the concat method we have to create a new varible to hold the new array fromed by merging of two different arrays

const allNewHeros =[...marvel,...dc]
console.log(allNewHeros);
// this is almost simlar to the concat method but its more simpler and we can add more than 2 arrays at a time.this is called as spread method 


// flat() function of array 
let newArr = [2, 3, 4,[4, 5, 6, [5, 6, 7, 9, 0]]]
console.log(newArr.flat(Infinity));

// creating array
console.log(Array.from("Nitin"));
// creating array from various variables
let score1 = 200;
let score2 = 400;
let score3 = 600;

console.log(Array.of(score1, score2, score3));


