// control flow 

// 1. if statments

// checking with one single condition:
if(true){
    // the code will execute;
}
if(false){
    // the won't execute;
}

const userLoggedIn = true;
const debitCard = true;
// checking for multiple conditions 
if(userLoggedIn && debitCard){
    // execute the code
}else{
    // do this
}

// checking of nested conditions
// here the condition will be check untill the condition truns to be true
const temp = 100;
if( temp < 500){
    // do this
}else if(temp < 750){
    // do this
}else if(temp < 900){
    // do this
}else{
    // do this
}