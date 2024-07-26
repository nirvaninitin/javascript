// filter in array 
// basic syntax:
const myNum = [1, 2, 4, 5, 6, 7, 8, 9, 10]
const myNewNum = myNum.filter( (num) => {
    return num > 5
})
console.log(myNewNum);

const books = [
    {
        title:"book 1",
        type:"Fiction"
    },
    {
        title:"book 2",
        type:"non-Fiction"
    },
    {
        title:"book 3",
        type:"history"
    },
    {
        title:"book 4",
        type:"comedy"
    },
    {
        title:"book 5",
        type:"comedy"
    },
    {
        title:"book 6",
        type:"Fiction"
    }
]

const myBook = books.filter( (bk) => {
    return bk.type === "comedy";
}
)
console.log(myBook);