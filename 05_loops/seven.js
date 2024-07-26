const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// map 
let newNum = myNum.map((n) => n + 10)

// const newNum = myNum.forEach( (n) => {
    //     console.log( n + 10)
// })

// chaining 
newNum = myNum.map( (n) => {
    return n * 10
}).map( (n) => {
    return n + 5
}).filter( (n) => {
    return n > 50
})

console.log(newNum);
