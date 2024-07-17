// what is the use of iife?
// iife is used when we want our function to invoke immediately and save the functionn from global polution.

// how to declare a iife function
// named iife
(function chai(name){
    console.log("Chai pilo",name);
})("Nitin");

// !!!! NOTE !!!! --> always end the iife function with ; "WITHOUT FAIL", otherwise the another iife function wont run error occurs.
// unnamed iife
(()=>{
    console.log("coffee pilo");
})();
