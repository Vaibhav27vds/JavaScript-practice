const a = 50 // global scope


if(true) {
    let a =10 
const b= 20 
var c =30
}  // block scope


// console.log(a);
// console.log(b);
console.log(c);


function one() {
    const username = "Vaibhav"
    // console.log(website)
    function two() {
        const website = "Github"
        console.log(username)
    }
    two()
}

one()