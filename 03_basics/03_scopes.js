// !!! never ever use keywork "var" for declaring an varibale alway use const/let !!!
// the variables declared outside the curly braces are called gobal variable or have global scope
let a = 300;
const b = 400;
var c = 500;
// variables declared inside the curly braces are local variable or have local scope
if(true){
    let a = 30;
    const b = 40;
    var c = 50;
    console.log("inner:",a);
    console.log("inner:",b);
    console.log("inner",c); 
}
console.log(a);
console.log(b);
console.log(c);

