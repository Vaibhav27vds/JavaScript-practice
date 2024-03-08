const user = {
    username: "Vaibhav",
    price: 9999,
    email: "vaibhav@gmail.com",
    greeting: function welcomeMessage(){
        console.log(`Welcone ${this.username} to the website`);
        // console.log(this);
    },
}
// console.log(this);

// console.log(user.greeting());
user.username = "Hitesh"
// console.log(user.greeting());

function get (){
    let username = "Vaibhav"
    // console.log(this.username);
}

get();


// ---------------------------------------------aroow function--------------------------------------------

() => {} // this is an arrow function 

const add2 = (a,b) => {
    return a + b;
}

console.log(add2(8,10));