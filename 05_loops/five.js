const myArr = ['js','ruby', 'python', 'java']
// foreach loops (only for arrays)
myArr.forEach( (items) => {
    // console.log(items);
})
myArr.forEach( (items, index, arr) => {
    // console.log(items, index, arr);
})

const coding = [
    {code: "javascript",
     fileName: "js"
    },
    {code: "c++",
     fileName: "cpp"
    },
    {code: "java",
     fileName: "java"
    },
    {code: "python",
     fileName: "py"
    }
]

coding.forEach( (item) => {
    console.log(item.fileName);
})