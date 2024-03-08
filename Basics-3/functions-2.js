function calculateCartPrice (...num1) {
    return num1;
}

console.log(calculateCartPrice(5 ,6,6,3453,45)); 


const user = {
    username: "Vaibhav",
    age: 18,
    domain: "Web dev"
}

function handleObject (anyobject) {
    console.log(`The name of the user is ${anyobject.username} and his age is ${anyobject.age} and he works in ${anyobject.domain} domain`)
}

handleObject(user)


const testArray = [100, 454, 2345, 345, 345]

function returnSecondValue (array) {
    return array[1]
}

console.log(returnSecondValue(testArray))