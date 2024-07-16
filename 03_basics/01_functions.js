const addition = function(num1, num2){
    return num1 + num2;
}
console.log(addition(45, 56));

const normalfunc = function(){
    console.log("Nitin");
}
normalfunc()

const logIn = function(username){
    if(!username){
        return `please enter username first`
    }
    else{
        return`${username} just logged in`
    }
}

console.log(logIn("Nitin"));