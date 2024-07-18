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
// checking for multiple conditions (more than one condition to be true)
// {&& this is and operator}
if(userLoggedIn && debitCard){
    // execute the code
}else{
    // do this
}
// (any of the one condition to be true)
const userLoggedInFromGoogle = true
const userLoggedInFromEmail = false
if(userLoggedInFromGoogle || userLoggedInFromEmail){
    // do this 
}else {
    // do this
}
// {|| this is or operator}

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