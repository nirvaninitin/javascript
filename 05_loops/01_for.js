// for loops

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5){
//         console.log("5 Is best");
//     }else{
//     console.log(element);
//     }
// }

// for(let i = 1; i <= 10; i++){
//     for(j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log(i);
// }

let myArray = ["Superman", "Spiderma", "Batman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
// break and continue
for (let index = 1; index <= 10; index++){
    if(index == 5){
        console.log("it 5");
        break
    }
    console.log(index);
}

// continue

for (let i = 0; i < 10; i++) {
    if (i == 5){
        console.log("its fucking 5");
        continue
    }
    console.log(i);
}