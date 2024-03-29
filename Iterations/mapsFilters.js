const numbers = [1,2,3,4,5,6,7,8,9,10]

const values = numbers.filter((num) => {
    return num>4
})

// console.log(values); 

const newValues = numbers.map((num) => num*10)
.map((num) => num+1)
.filter((num) => num>40)

// console.log(newValues);

// reduce

const arr = [1,2,3]

const newarr = arr.reduce((accumulator, currentValue) => {
    // return accumulator, currentValue
    console.log(`acc is ${accumulator} And curval is ${currentValue}`);
    return accumulator + currentValue
},50)

