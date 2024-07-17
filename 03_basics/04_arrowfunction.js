const user = {
    username: "Nitin",
    price: 999,
    welcomeMessage :function() {
        console.log(`${this.username}, welcome to the website!`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "Preeti"
user.welcomeMessage()

console.log(this);

// basic example of arrow function(insplit)
const one = (num1, num2) => (num1 + num2)
console.log(one(3,4));
// one(3,4);

// getting obj with arrow function
const two = () => ({username:"nitin"})
console.log(two());

// basic example of arrow function (exsplit)
const three = (a, b) =>{
    return a+b;
}
console.log(three(2,3));