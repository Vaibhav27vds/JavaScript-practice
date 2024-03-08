const arr = ["You", "Know" , "The", "Business"]
const arr2 = ["I", "Know", "The", "Chemistry"]

console.log(arr)
console.log(arr2)


console.log(arr + arr2);

console.log(`${arr} ${arr2}`); // Interpolation

const newArr = arr.concat(arr2); 

console.log(newArr);

const newesrArray = [...arr , ...arr2] // Spread

console.log(newesrArray)

const latestArray = [1, 2 , 3, 4 , [5, 6, 7], 8, [1, 2, 3, 4, [5, 6, 7] ,[8,9] ] , "Hello" ] 

console.log(latestArray)

const anotherArray = latestArray.flat(Infinity)

console.log(anotherArray)

console.log(Array.isArray("Vaibhav"));

console.log(Array.from("Vaibhav"))

console.log(Array.from({name: "Vaibhav"}))    // interesting interview case

let score1 = 100
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1,score2,score3))