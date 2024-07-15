// how to declare an array 
const myarr = [1, 2, 3, 4, 5]
console.log(myarr);
// how to get the element from the array :
console.log(myarr[0]);

// Array methods:

// adding and removing of elements from end of the array
// 1-> Push:
myarr.push(6)
console.log(myarr);
// 2 -> Pop
myarr.pop()
console.log(myarr)

// adding and removing of array element from the start
// 1 -> Unshift 
myarr.unshift(9, 10)
console.log(myarr)
// 2 -> shift
myarr.shift()
console.log(myarr)

// questions type fuctions of array 
// 1 -> includes()
console.log(myarr.includes(9))
// 2 -> indexOf()
console.log(myarr.indexOf(3));

// converting the array elements into string
const myNewArr = myarr.join()
console.log(myNewArr);