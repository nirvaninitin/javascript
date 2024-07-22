// loop in object

const myObject  = { 
    js : "javascript",
    cpp: 'c++',
    rb: "ruby"
}
// for-in loop 
for (const key in myObject) {
    // console.log(`${key} is shortcut of ${myObject[key]}`);
}

// for-in loop in arrays
const myArr = ['js','ruby', 'python', 'java']
for (const key in myArr) {
    console.log(myArr[key]);
}