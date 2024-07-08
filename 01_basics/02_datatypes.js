// pritive data type: string, number, boolean, null, symboll, bigInt, undefined

let mystring = "This is an eg. of string!"
let mynumber = 123445
let myboolean = true
let mysymbol = Symbol('123')
let myundifined;
let mybigInt = 98774848475845748857n

console.log(typeof mystring);
console.log(typeof mynumber);
console.log(typeof myboolean);
console.log(typeof mybigInt);
console.log(typeof mysymbol);

// non primitive data type: Array, object, function

let myarray = [112, 34, "hello", 34, "world", "i am nitin"]
let myobj = {
    name : "nitin",
    age : 23
}
let myfunction = function myfunction() {
    console.log("Heello Worldd !!")
}