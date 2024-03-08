const sayMyName = function(){
    console.log("Vaibhav");
}

sayMyName()

const add2numbers = function(number1, number2){  // where (number1,number2) are called parameters
    // console.log(number1+number2);
    return number1+number2
}

add2numbers(3, "4")  // where (3, "4") are called arguments

const result = add2numbers(3,8)
console.log(`Result is : ${result}`)


function loginUserMessage(userName) {
    return `${userName} you have loggedIn`
}

console.log(loginUserMessage("Vaibhav")) 