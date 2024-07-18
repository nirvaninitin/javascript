let useremail = []

if(useremail){
    console.log("welcome");
}else{
    console.log("get lost");
}

// What are falsy values :
// false, 0, -0, bigint 0n, null, Nan, undefined, "";

// truthy values:
// "0","false", " ", {}, [], function(){},


// checking if the array / object is empty:
if (useremail.length === 0){
    console.log("Arry is empty");
}

const empobj = {}
if (Object.keys(empobj).length === 0){
    console.log("Empty object");
}

// nullish caolescing operator: null / undefined
 
// const val1 = 15 ?? 10 
// const val1 = null ?? 10 
const val1 = undefined ?? 10 



console.log(val1);