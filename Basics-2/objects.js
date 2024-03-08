// singleton 
Object.create // makes a singleton object 

const newObj = {} // Non singleton object

const newObj2 = new Object() // singleton object

const mySym = Symbol("key1")

const User = { 
    name : "Vaibhav",
    "full name" : "Vaibhav Deep Srivastava",
    [mySym] : "Mykey1",
    age : 18,
    location : "Lucknow",
    isLoggedin : false,
    lastLoggedIn : ["Mon", "Sat"]

}  // this is an object      
// Object.freeze(User)
User.location = "Bhubaneshwar"



console.log(User["name"]);
console.log(User["full name"]); // cant access it by User.full name because of the space in between
console.log(User.age);
console.log(User.location);
console.log(User.isLoggedin);
console.log(User.lastLoggedIn);
console.log(User[mySym]);

console.log(User);

User.greetings = function(){
    console.log("Hello js User");
}

User.greetings2 = function(){
    console.log(`Hello ${this.name}! Welcome to the app`);
}


console.log(User.greetings())  // function reference

console.log(User.greetings2())

