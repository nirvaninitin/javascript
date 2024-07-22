// for of loop

const myArr = [1, 2, 3, 4, 5]
for(const num of myArr){
    // console.log(num);
}
const greeting = "Hello Love"
for (const greet of greeting) {
    // console.log(greet);
    }

// maps

const map = new Map()
map.set('IN','India')
map.set('Maha', 'maharastra')
map.set('pn', 'pune')

// console.log(map);
for (const [key,value] of map) {
    console.log(key,value);
}