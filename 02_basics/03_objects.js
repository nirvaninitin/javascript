// declaration of obj

const mySym = Symbol("key1");
const myObj = {
    name : "nitin",
    age : 19,
    email:"nitin@google.comm",
    [mySym]: "mykey1"
}

// the correct way of asseccing the obj
// console.log(myObj['name']);

// how to get smybol value by obj
// console.log(myObj[mySym]);

// to change the the value on the object 
myObj.email = "nitinnirvani@google.com";
// console.log(myObj);

// to freeze the object 
// Object.freeze(myObj)
myObj.email = "nitin@wipro.com";
// console.log(myObj);

// adding function 

myObj.greeting = function(){
    console.log(`hello user ${this.name}`);
}
console.log(myObj.greeting());