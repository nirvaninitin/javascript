const myNum = [1, 2, 3]

const myTotal = myNum.reduce(function ( acc, curval){
    console.log(`Acc : ${acc} and curVal: ${curval}`);
    // console.log(`curVal: ${curval}`);
    return acc + curval
}, 3)

console.log(myTotal);