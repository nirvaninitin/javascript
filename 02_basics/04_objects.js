// singleton objects 
 
const user = {}

user.name = "nitin";
user.email = "some@gmail.com"
user.isLogedIn = false

console.log(user);

const anotherUser = {
    email: "another@gmail.com",
    fullname:{
        firstName:{
            name:"nitin"
        },
        lastname:{
            surname:"Nirvani"
        }
    }
}
console.log(anotherUser.fullname.firstName.name);

// merging / combining the objs

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

// another method to do the same:
const obj4 = {...obj1,...obj2};
console.log(obj4);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
