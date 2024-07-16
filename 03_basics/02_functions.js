const user = {
    username: "nitin Nirvani",
    price: 199
};
objhandler = function(anyuser){
    return `the user name is ${anyuser.username}, The price of user is ${anyuser.price}`
};
console.log(objhandler(user));

const myNewArr = [100, 200, 300, 400];
function getArr(anyarray) {
    return anyarray[1];
}
console.log(getArr(myNewArr));